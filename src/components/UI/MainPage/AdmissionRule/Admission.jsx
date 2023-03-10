import { Container, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import cls from "./Admission.module.scss";
import AdmissionCard from "./AdmissionCard/AdmissionCard";

const Admission = () => {
  const userId = Cookies.get("userId");
  const router = useRouter();

  const card = [
    {
      number: "1",
      text: (
        <span>
          TTU kabinetida ro'yhatdan o'tish va qabul uchun abiturient{" "}
          <button
            onClick={() => (userId ? router.push("/personal") : router.push("/registration"))}
            style={{
              color: "#e3591e",
              textDecoration: "underline",
              cursor: "pointer",
              backgroundColor: "transparent",
              outline: "none",
              border: "none",
            }}
          >
            {" "}
            arizasini to'ldirish
          </button>
          .
        </span>
      ),
    },
    {
      number: "2",
      text: "DTM testidan 60 baldan ko'proq olganlik haqida hujjat taqdim etish, yokiTTU maxsus imtihonlarini topshirish.",
    },
    {
      number: "3",
      text: "Talabalikka tavsiya etilganingizdan so'ng shartnomani yuklab olib to'lovni oshirish.",
    },
  ];
  return (
    <div className={cls.admission}>
      <Container className={cls.container}>
        <div className={cls.text}>
          <Typography className={cls.title}>Qabul shartlari</Typography>
        </div>
        <div className={cls.cardRoot}>
          {card.map((item, index) => (
            <AdmissionCard
              key={item.id}
              number={item.number}
              text={item.text}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Admission;
