import React, { useEffect, useRef, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSnackbar } from "notistack";
import exportInvoiceAPI from "../../../../api/exportInvoiceAPI";
import detailExportInvoiceAPI from "../../../../api/detailExportInvoiceAPI";
import detailProductAPI from "../../../../api/detailProductAPI";
import employeeAPI from "../../../../api/employeeAPI";
import deliverAPI from "../../../../api/deliverAPI";
import { useReactToPrint } from "react-to-print";
import "./style.css";
import userAPI from "../../../../api/userAPI";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -80%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const styleView = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ExportInvoice() {
  const [dataBill, setDataBill] = useState([]);
  const [deliver, setDeliver] = useState("");
  const [shipper, setShipper] = useState([]);
  const [count, setCount] = useState(0);
  const [listOrder, setListOrder] = useState([]);
  const [idOrder, setIdOrder] = useState("");
  const [customer, setCustomer] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [tong, setTong] = useState(0);
  const [khuyenmai, setkhuyenmai] = useState(0);
  const [thanhvien, setThanhVien] = useState("");
  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);
  const handleOpenCancel = () => setOpenCancel(true);
  const handleCloseCancel = () => setOpenCancel(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);
  const componentRef = useRef();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    (async () => {
      let a = 0;
      let b = 0;

      if (listOrder.length !== 0) {
        for (let i = 0; i < listOrder.length; i++) {
          a =
            a +
            listOrder[i]?.so_luong_xuat *
              (listOrder[i]?.gia_ban_sp -
                (listOrder[i]?.gia_ban_sp * listOrder[i]?.giam_gia) / 100);
          b = b + (listOrder[i].giam_gia * listOrder[i].gia_ban_sp) / 100;
        }
        setTong(a);
        setkhuyenmai(b);
      }
      const result = await exportInvoiceAPI.getAll();
      const res = await employeeAPI.getAllShiper();
      setShipper(res);
      setDataBill(result);
    })();
  }, [count, listOrder]);
  const handleConfirm = async () => {
    if (deliver) {
      await exportInvoiceAPI.updateStatus(idOrder, {
        status: "???? x??c nh???n",
      });

      await deliverAPI.createDeliver({
        idnv: deliver,
        trangthai: "??ang x??? l??",
        idhdx: idOrder,
      });

      setCount((e) => e + 1);
      handleCloseConfirm();
    } else {
      enqueueSnackbar("Vui l??ng ch???n ng?????i giao h??ng", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const handleCancel = async () => {
    const data_hdx = await detailExportInvoiceAPI.getDetailExportInvoice(
      idOrder
    );
    await detailProductAPI.addNumberProduct(data_hdx);
    await exportInvoiceAPI.updateStatus(idOrder, {
      status: "H???y",
    });
    setCount((e) => e + 1);
    handleCloseCancel();
  };

  const handleView = async (id_hdx) => {
    handleOpenView();
    const res = await exportInvoiceAPI.getExportInvoice(id_hdx);
    setCustomer(res);
    const data = await detailExportInvoiceAPI.getDetailExportInvoice(id_hdx);
    setListOrder(data);
    const thanh_vien = await userAPI.getOneUser(data[0].id_kh);
    setThanhVien(thanh_vien[0]?.thanh_vien);
  };
  // const handlePrint = async (id_hdx) => {
  //   const res = await exportInvoiceAPI.getExportInvoice(id_hdx);
  //   setCustomer(res);
  //   const data = await detailExportInvoiceAPI.getDetailExportInvoice(id_hdx);
  //   setListOrder(data);
  //   handlePrinta();
  // };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });
  const columns = [
    {
      field: "id_hdx",
      headerName: "M?? h??a ????n",
      width: 125,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "tong_tien",
      headerName: "T???ng ti???n",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "trang_thai",
      headerName: "Tr???ng th??i",
      width: 130,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ngay_lap",
      headerName: "Ng??y l???p",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "hinh_thuc",
      headerName: "Thanh to??n",
      width: 170,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "hanh_dong",
      headerName: "H??nh ?????ng",
      headerAlign: "center",
      width: 460,
      renderCell: (params) => (
        <div className="flex gap-5">
          {params.row.trang_thai === "??ang x??? l??" ? (
            <>
              <div>
                <button
                  onClick={() => {
                    setIdOrder(params.row.id_hdx);
                    handleOpenConfirm();
                  }}
                  className="py-2 px-4 text-white bg-sky-500 rounded-lg shadow-md"
                >
                  X??c nh???n
                </button>
                <Modal
                  open={openConfirm}
                  onClose={handleCloseConfirm}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <p className="text-[24px] text-center font-bold">
                      X??c nh???n h??a ????n {params.row.id_hdx}
                    </p>
                    <div className="mt-6">
                      <select
                        onChange={(e) => setDeliver(e.target.value)}
                        className="mt-2 py-2 px-4 border w-full"
                      >
                        <option value="">Ch???n ng?????i giao h??ng</option>
                        {shipper?.map(({ id_nv, ten_nv }, idx) => (
                          <option key={idx} value={id_nv}>
                            {ten_nv}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <button
                        onClick={() => handleConfirm()}
                        className="block mt-6 mx-auto py-2 px-4 text-white bg-sky-500 rounded-lg shadow-md"
                      >
                        X??c nh???n h??a ????n
                      </button>
                    </div>
                  </Box>
                </Modal>
              </div>
              <div>
                <button
                  onClick={() => {
                    setIdOrder(params.row.id_hdx);
                    handleOpenCancel();
                  }}
                  className="py-2 px-4 text-white bg-red-500 rounded-lg shadow-md"
                >
                  H???y
                </button>
                <Modal
                  open={openCancel}
                  onClose={handleCloseCancel}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <p className="text-[24px] text-center font-bold">
                      X??c nh???n h???y h??a ????n {params.row.id_hdx}
                    </p>
                    <div>
                      <button
                        onClick={() => handleCancel()}
                        className="block mt-6 mx-auto py-2 px-4 text-white bg-sky-500 rounded-lg shadow-md"
                      >
                        H???y h??a ????n
                      </button>
                    </div>
                  </Box>
                </Modal>
              </div>
            </>
          ) : (
            <>
              <div>
                <button className="py-2 px-4 text-white bg-sky-500 opacity-50 rounded-lg shadow-md cursor-not-allowed">
                  X??c nh???n
                </button>
              </div>
              <div>
                <button className="py-2 px-4 text-white bg-red-500 opacity-50 rounded-lg shadow-md cursor-not-allowed">
                  H???y
                </button>
              </div>
            </>
          )}
          <div>
            <button
              onClick={() => handleView(params.row.id_hdx)}
              className="py-2 px-4 text-white bg-slate-800 rounded-lg shadow-md"
            >
              Xem h??a ????n
            </button>
            <Modal
              open={openView}
              onClose={handleCloseView}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleView}>
                <p className="text-[24px] text-center font-medium">
                  Th??ng tin h??a ????n
                </p>
                <div className="">
                  <div className="">
                    <p>
                      T??n kh??ch h??ng: <strong>{customer[0]?.ten_kh}</strong>
                    </p>
                    <p>
                      S??? ??i???n tho???i:{" "}
                      <strong>{customer[0]?.so_dien_thoai}</strong>
                    </p>
                    <p>
                      ?????a ch???: <strong>{customer[0]?.dia_chi_hdx}</strong>
                    </p>
                    <p>
                      Th??nh vi??n:{" "}
                      <strong>
                        {thanhvien === 1
                          ? "-5%"
                          : thanhvien === 2
                          ? "-10%"
                          : thanhvien === 3
                          ? "-20%"
                          : ""}
                      </strong>
                    </p>
                    <p>
                      T???ng ti???n:{" "}
                      <strong>
                        {new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          currency: "VND",
                        }).format(listOrder[0]?.tong_tien_hdx)}
                      </strong>
                    </p>
                  </div>
                  <div>
                    {listOrder?.map(
                      (
                        {
                          ten_sp,
                          gia_ban_sp,
                          giam_gia,
                          hinh_anh,
                          so_luong_xuat,
                          ten_ms,
                          ten_kt,
                        },
                        idx
                      ) => (
                        <div
                          className="relative mt-4 flex gap-5 items-center"
                          key={idx}
                        >
                          <div className="w-[12%]">
                            <img
                              className="border-2 border-slate-500 rounded-md"
                              src={hinh_anh}
                              alt=""
                            />
                          </div>
                          <div className="w-[40%] text-[16px]">
                            <p>{ten_sp}</p>
                          </div>
                          <div className="w-[15%]">
                            {!!giam_gia ? (
                              <>
                                <p className="text-slate-700 text-center line-through">
                                  {new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(gia_ban_sp)}
                                </p>
                                <p className="text-[18px] font-bold">
                                  {new Intl.NumberFormat("it-IT", {
                                    style: "currency",
                                    currency: "VND",
                                  }).format(
                                    gia_ban_sp - (gia_ban_sp * giam_gia) / 100
                                  )}
                                </p>
                              </>
                            ) : (
                              <p className="text-[18px] font-bold">
                                {new Intl.NumberFormat("it-IT", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(gia_ban_sp)}
                              </p>
                            )}
                          </div>
                          <div className="w-[33%] text-center">
                            <p className="text-[16px] text-slate-600">
                              S??? l?????ng: {so_luong_xuat}
                            </p>
                          </div>

                          <div className="absolute flex gap-5 left-[13.5%] top-[75%] text-slate-500 text-[14px]">
                            <div>
                              <p>M??u s???c: {ten_ms}</p>
                            </div>
                            <div>
                              <p>K??ch th?????c: {ten_kt}</p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="flex ">
                  <button
                    onClick={handleCloseView}
                    className="block mt-6 mx-auto py-2 px-4 text-white bg-sky-500 rounded-lg shadow-md"
                  >
                    ????ng
                  </button>
                  <button
                    onClick={handlePrint}
                    className="block mt-6 mx-auto py-2 px-4 text-white bg-sky-500 rounded-lg shadow-md"
                  >
                    In h??a ????n
                  </button>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      ),
    },
  ];
  const rows = dataBill?.map(
    (
      {
        id_hdx,
        ten_kh,
        so_dien_thoai,
        tong_tien_hdx,
        trang_thai,
        ngay_lap_hdx,
        hinh_thuc_thanh_toan,
        dia_chi_hdx,
      },
      idx
    ) => ({
      id: idx,
      id_hdx: id_hdx,
      ten_kh: ten_kh,
      sdt_kh: so_dien_thoai,
      dia_chi: dia_chi_hdx,
      tong_tien: `${new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      }).format(tong_tien_hdx)}`,
      trang_thai: trang_thai,
      ngay_lap: moment(ngay_lap_hdx).format("DD-MM-YYYY"),
      hinh_thuc:
        hinh_thuc_thanh_toan === "offline" ? "Khi nh???n h??ng" : "Qua ng??n h??ng",
    })
  );

  return (
    <div className="px-[20px]">
      <div style={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
        />
      </div>
      <div className="auto" style={{ display: "none" }}>
        <div className="containera" ref={componentRef}>
          <div className="header">
            <div className="logo">
              <span className="text">DShop</span>
            </div>
          </div>
          <div className="main-content">
            <div className="invoice-container">
              <div className="top">
                <div className="top-left">
                  <h1 className="main">H??a ????n</h1>
                  <span className="code">#{customer[0]?.id_hdx}</span>
                </div>
              </div>
              <div className="bill-box">
                <div className="left">
                  <div className="text-m">G???i t???:</div>
                  <div className="title">DShop</div>
                  <div className="addr">3/2 Xu??n Kh??nh, Ninh Ki???u, C???n Th??</div>
                </div>
                <div className="right">
                  <div className="text-m">G???i t???i:</div>
                  <div className="title">{customer[0]?.ten_kh}</div>
                  <div className="addr">{customer[0]?.dia_chi_hdx}</div>
                </div>
              </div>
              <div className="table-bill">
                <table className="table-service">
                  <thead>
                    <tr>
                      <th className="quantity">S??? l?????ng</th>
                      <th className="aaa">S???n ph???m</th>
                      <th className="cost">Gi??</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOrder.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {item.so_luong_xuat} - {item.ten_ms} - {item.ten_kt}
                          </td>
                          <td>{item.ten_sp}</td>
                          <td className="cost">
                            {item.so_luong_xuat} X &nbsp;
                            {new Intl.NumberFormat("it-IT", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.gia_ban_sp)}{" "}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="ship">
                      <td className="shipname">Khuy???n m??i</td>
                      <td colSpan={2} className="shipnumber">
                        {new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          currency: "VND",
                        }).format(khuyenmai)}{" "}
                      </td>
                    </tr>
                    <tr className="ship">
                      <td className="shipname">Th??nh vi??n</td>
                      <td colSpan={2} className="shipnumber">
                        {thanhvien === 1
                          ? "-5%"
                          : thanhvien === 2
                          ? "-10%"
                          : thanhvien === 3
                          ? "-20%"
                          : "0%"}
                        {/* {new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          currency: "VND",
                        }).format(khuyenmai)}{" "} */}
                      </td>
                    </tr>
                    <tr className="ship">
                      <td className="shipname">Ph?? v???n chuy???n</td>
                      <td colSpan={2} className="shipnumber">
                        {tong > 1000000 || thanhvien !== 0
                          ? "Mi???n ph??"
                          : "30000 VND"}
                      </td>
                    </tr>
                    <tr className="total">
                      <td className="name">T???ng ti???n</td>
                      <td colSpan={2} className="number">
                        {new Intl.NumberFormat("it-IT", {
                          style: "currency",
                          currency: "VND",
                        }).format(listOrder[0]?.tong_tien_hdx)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="note">
                <p>C???m ??n ban ???? ???ng h??? s???n ph???m!</p>
                <p>DShop.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportInvoice;
