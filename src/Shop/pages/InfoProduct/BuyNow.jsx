import moment from "moment";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import detailExportInvoiceAPI from "../../../api/detailExportInvoiceAPI";
import exportInvoiceAPI from "../../../api/exportInvoiceAPI";
import addressAPI from "../../../api/addressAPI";

import { removeAllCart } from "../../../redux/cartSlide";

import CardAddress from "../../../components/CardAddress";
import provinceAPI from "../../../api/provinceAPI";
import { address, removeOneAddress } from "../../../redux/addressSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import payOnlineAPI from "../../../api/payOnlineAPI";
import detailProductAPI from "../../../api/detailProductAPI";
// import userAPI from "../../../api/userAPI";

const styleAddress = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const styleFormAddress = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function BuyNow() {
  const [count, setCount] = useState(0);
  const [sumPrice, setSumPrice] = useState("");
  const [listAddress, setListAddress] = useState([]);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [wards, setWards] = useState([]);
  const [provinceName, setProvinceName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [wardName, setWardName] = useState("");
  const [openAddress, setOpenAddress] = useState(false);
  const handleOpenAddress = () => setOpenAddress(true);
  const handleCloseAddress = () => setOpenAddress(false);

  const [openFormAddress, setOpenFormAddress] = useState(false);
  const handleOpenFormAddress = () => setOpenFormAddress(true);
  const handleCloseFormAddress = () => setOpenFormAddress(false);

  const id_kh = useSelector((state) => state?.user?.current.dataUser[0]?.id_kh);
  const thanh_vien = useSelector(
    (state) => state?.user?.current.dataUser[0]?.thanh_vien
  );

  const dia_chi = useSelector((state) => state?.address?.addresslist[0]);
  const listBuy = useSelector((state) => state?.listbuy?.list);
  const addressChecked = useSelector((state) => state.address?.addresslist);
  const params = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { register, handleSubmit } = useForm();

  const { handleSubmit: handleSubmitAddress, control: controlAddress } =
    useForm();

  useEffect(() => {
    (async () => {
      let a = 0;
      if (listBuy.length !== 0) {
        for (let i = 0; i < listBuy.length; i++) {
          a +=
            listBuy[i]?.so_luong_xuat *
            (listBuy[i]?.gia_ban -
              (listBuy[i]?.gia_ban * listBuy[i]?.giam_gia) / 100);
        }
        setSumPrice(a);
      }
    })();
  }, [params, listBuy, count]);

  const typeBuy = async (type) => {
    const id_hdx = await exportInvoiceAPI.createExportInvoice({
      tenkh: dia_chi.ten_kh,
      sdtkh: dia_chi.sdt_kh,
      tongtienhdx:
        thanh_vien === 1
          ? sumPrice - (sumPrice * 5) / 100
          : thanh_vien === 2
          ? sumPrice - (sumPrice * 10) / 100
          : thanh_vien === 3
          ? sumPrice - (sumPrice * 20) / 100
          : thanh_vien === 0 && sumPrice > 1000000
          ? sumPrice
          : sumPrice + 30000,
      ngaylaphdx: moment().format("YYYY-MM-DD"),
      trangthai: "??ang x??? l??",
      hinhthuctt: "offline",
      diachi: dia_chi.dia_chi_kh,
      tienvc: sumPrice > 1000000 || thanh_vien !== 0 ? 0 : 30000,
      idkh: id_kh,
    });

    await detailExportInvoiceAPI.createdetailExportInvoice({
      idhdx: id_hdx[0].id_hdx,
      products: listBuy,
    });

    await detailProductAPI.removeProduct(listBuy);
    if (type === "cart") {
      dispatch(removeAllCart());
    }
    navigation("/shop/orders");
  };
  const payoffline = () => {
    try {
      if (!dia_chi.id_dc) {
        enqueueSnackbar("Vui l??ng ch???n ?????a ch??? ho???c th??m ?????a ch???", {
          variant: "error",
          autoHideDuration: 2000,
        });
        return;
      }
      if (listBuy[0].type === "cart") {
        typeBuy(listBuy[0].type);
      } else {
        typeBuy();
      }
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const payonline = async () => {
    try {
      if (!dia_chi.id_dc) {
        enqueueSnackbar("Vui l??ng ch???n ?????a ch???", {
          variant: "error",
          autoHideDuration: 2000,
        });
        return;
      }
      const data = await payOnlineAPI.create_payment_url({
        orderType: "billpayment",
        amount: sumPrice,
        bankCode: "",
        language: "vn",
      });
      window.location = data;
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const renderProduct =
    listBuy?.length > 0 ? (
      listBuy?.map(
        (
          {
            ten_sp,
            gia_ban,
            giam_gia,
            hinh_anh,
            so_luong_xuat,
            ten_ms,
            ten_kt,
          },
          idx
        ) => (
          <div className="relative mt-4 flex gap-5 items-center" key={idx}>
            <div className="w-[12%]">
              <img
                className="border-2 border-slate-500 rounded-md"
                src={hinh_anh}
                alt=""
              />
            </div>
            <div className="w-[35%] text-[16px]">
              <p>{ten_sp}</p>
            </div>
            <div className="w-[20%]">
              {!!giam_gia ? (
                <>
                  <p className="text-slate-700 text-center line-through">
                  {new Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "VND",
                  }).format(gia_ban)}
                  </p>
                  <p className="text-[18px] text-center font-bold">
                    {new Intl.NumberFormat("it-IT", {
                      style: "currency",
                      currency: "VND",
                    }).format(gia_ban - (gia_ban * giam_gia) / 100)}
                  </p>
                </>
              ) : (
                <p>
                  {new Intl.NumberFormat("it-IT", {
                    style: "currency",
                    currency: "VND",
                  }).format(gia_ban)}
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
      )
    ) : (
      <></>
    );

  const deleteAddress = async (id_dc) => {
    try {
      await addressAPI.deleteAddress(id_dc);
      if (addressChecked[0]?.id_dc === id_dc) {
        dispatch(removeOneAddress());
      }
      handleSettingAddress();
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const handleSettingAddress = async () => {
    handleOpenAddress();
    const data = await addressAPI.getAddress(id_kh);
    setListAddress(data);
  };

  const selectAddress = async (data) => {
    unwrapResult(dispatch(await address(data.sldiachi)));
  };

  const submitAddAddress = async (data) => {
    try {
      if (provinceName && districtName && wardName) {
        await addressAPI.createAddress({
          tenkh: data.name,
          diachikh: `${data.address}, ${wardName}, ${districtName}, ${provinceName}`,
          sdtkh: data.phone,
          idkh: id_kh,
        });
        setCount((e) => e + 1);
        handleCloseFormAddress();
        handleSettingAddress();
      } else {
        enqueueSnackbar("Vui l??ng nh???p ?????y ????? th??ng tin", {
          variant: "error",
          autoHideDuration: 2000,
        });
      }
    } catch (error) {
      enqueueSnackbar(error.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const addAddress = async () => {
    const data_provice = await provinceAPI.getListProvince();
    setProvince(data_provice.data.results);
    handleOpenFormAddress();
    handleCloseAddress();
  };

  const selectProvince = async (code) => {
    const data_province = await provinceAPI.getProvince(code);

    setDistrict(data_province.data.results);
    setProvinceName(data_province.data.results[3].province);
    setCount((e) => e + 1);
  };

  const selectDistrict = async (code) => {
    const data_district = await provinceAPI.getDistricts(code);
    setWards(data_district.data.results);
    setDistrictName(data_district.data.results[3].district);
    setCount((e) => e + 1);
  };

  const selectWard = async (code) => {
    for (let index = 0; index < wards.length; index++) {
      const element = wards[index];
      if (element.code === code) {
        setWardName(element.name);
        return;
      }
    }
  };

  return (
    <div className="flex gap-5 w-[80%] mx-auto mt-[50px]">
      <div className="w-[70%]">
        <div>
          <div className="bg-slate-100">
            <div className="flex justify-between py-2 px-4 bg-slate-200">
              <p className="font-medium">?????a ch??? giao h??ng</p>
              <p
                onClick={() => handleSettingAddress()}
                className="cursor-pointer text-sky-600"
              >
                Ch???n ?????a ch???
              </p>
              <Modal
                open={openAddress}
                onClose={handleCloseAddress}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styleAddress}>
                  <div className="flex justify-between">
                    <p>?????a ch??? nh???n h??ng</p>
                    <p
                      onClick={() => addAddress()}
                      className="text-sky-900 cursor-pointer"
                    >
                      Th??m ?????a ch??? m???i
                    </p>
                  </div>
                  <div className="mt-6">
                    <form
                      onChange={handleSubmitAddress((data) =>
                        selectAddress(data)
                      )}
                    >
                      {listAddress?.map((data, idx) => (
                        <div key={idx} className="relative">
                          <AiFillCloseCircle
                            onClick={() => deleteAddress(data.id_dc)}
                            className="absolute right-2 top-2 cursor-pointer hover:bg-white rounded-full"
                            size={25}
                            style={{ color: "#b71c1c" }}
                          />
                          {addressChecked?.length > 0 &&
                          addressChecked[0].id_dc === data.id_dc ? (
                            <div>
                              <CardAddress
                                data={data}
                                checked={true}
                                control={controlAddress}
                              />
                            </div>
                          ) : (
                            <div>
                              <CardAddress
                                data={data}
                                control={controlAddress}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </form>
                  </div>
                </Box>
              </Modal>
              <Modal
                open={openFormAddress}
                onClose={handleCloseFormAddress}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styleFormAddress}>
                  <p className="mb-4 text-[18px] font-medium">
                    Th??m ?????a ch??? nh???n h??ng m???i
                  </p>
                  <form
                    onSubmit={handleSubmit((data) => submitAddAddress(data))}
                  >
                    <div className="flex gap-5">
                      <div className="w-1/2">
                        <div className="mt-4">
                          <p>H??? t??n</p>
                          <input
                            name="name"
                            {...register("name", { required: true })}
                            className="w-full py-2 px-2 border border-slate-600 rounded-lg"
                            type="text"
                          />
                        </div>
                        <div className="mt-4">
                          <p>S??? ??i???n tho???i</p>
                          <input
                            name="phone"
                            {...register("phone", { required: true })}
                            className="w-full py-2 px-2 border border-slate-600 rounded-lg"
                            type="text"
                          />
                        </div>
                        <div className="mt-4">
                          <p>?????a ch??? nh???n h??ng</p>
                          <input
                            name="address"
                            {...register("address", { required: true })}
                            className="w-full py-2 px-2 border border-slate-600 rounded-lg"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="mt-4">
                          <p>T???nh/Th??nh ph???</p>
                          <select
                            onChange={(e) => selectProvince(e.target.value)}
                            className="w-full py-2 px-2 border border-slate-600 rounded-lg"
                            type="text"
                          >
                            <option value=""></option>
                            {province?.map(({ name, code }, idx) => (
                              <option key={idx} value={code}>
                                {name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mt-4">
                          <p>Qu???n/Huy???n</p>
                          <select
                            onChange={(e) => selectDistrict(e.target.value)}
                            className="w-full py-2 px-2 border border-slate-600 rounded-lg"
                            type="text"
                          >
                            <option value=""></option>
                            {district?.map(({ name, code }, idx) => (
                              <option key={idx} value={code}>
                                {name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mt-4">
                          <p>Ph?????ng/X??</p>
                          <select
                            onChange={(e) => selectWard(e.target.value)}
                            className="w-full py-2 px-2 border border-slate-600 rounded-lg"
                            type="text"
                          >
                            <option value=""></option>
                            {wards?.map(({ name, code }, idx) => (
                              <option key={idx} value={code}>
                                {name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <button className="block mt-4 text-white font-medium ml-auto mr-0 py-2 px-4 bg-cyan-500 rounded-lg shadow-md">
                      Th??m
                    </button>
                  </form>
                </Box>
              </Modal>
            </div>
            <div className="p-4">
              <p>T??n kh??ch h??ng: {dia_chi?.ten_kh}</p>
              <p>S??? ??i???n tho???i: {dia_chi?.sdt_kh}</p>
              <p>?????a ch???: {dia_chi?.dia_chi_kh}</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-slate-100 mt-5">{renderProduct}</div>
      </div>
      <div className="w-[30%]">
        <div className="p-4 bg-slate-100 rounded-lg">
          <div className="leading-10">
            <p className="text-[22px]">Th??ng tin ????n h??ng</p>
            {!!listBuy[0]?.gia_ban && (
              <>
                <div className="flex justify-between">
                  <p>T???m t??nh</p>
                  <p>
                    {new Intl.NumberFormat("it-IT", {
                      style: "currency",
                      currency: "VND",
                    }).format(sumPrice)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Th??nh vi??n</p>
                  <p>
                    {" "}
                    {thanh_vien === 0
                      ? "0%"
                      : thanh_vien === 1
                      ? "5%"
                      : thanh_vien === 2
                      ? "10%"
                      : "20%"}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Ph?? giao h??ng</p>
                  <p>
                    {sumPrice > 1000000 || thanh_vien !== 0
                      ? "Mi???n ph??"
                      : "30.000 ??"}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>T???ng c???ng</p>
                  <p>
                    {new Intl.NumberFormat("it-IT", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      thanh_vien === 1
                        ? sumPrice - (sumPrice * 5) / 100
                        : thanh_vien === 2
                        ? sumPrice - (sumPrice * 10) / 100
                        : thanh_vien === 3
                        ? sumPrice - (sumPrice * 20) / 100
                        : thanh_vien === 0 && sumPrice > 1000000
                        ? sumPrice
                        : sumPrice + 30000
                    )}
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="mt-4">
            <button
              onClick={() => payoffline()}
              className="w-full p-2 text-white bg-orange-400 rounded-md"
            >
              Thanh to??n khi nh???n h??ng
            </button>
            <button
              onClick={() => payonline()}
              className="w-full p-2 text-white mt-4 bg-sky-500 rounded-md"
            >
              Thanh to??n qua ng??n h??ng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
