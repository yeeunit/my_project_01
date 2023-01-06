import { message } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import * as P from "./Payment.styles";

// declare const window: typeof globalThis & {IMP}

export default function PaymentUI(props) {
  const router = useRouter();
  const [isPointOpen, setIsPointOpen] = useState(false);

  const [price, setPrice] = useState(100);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onChangePointPrice = () => {
    setIsBtnActive(true);
  };

  const onClickOpenPointModal = () => {
    setIsPointOpen(true);
  };

  const onClickClosePointModal = () => {
    setIsPointOpen(false);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onClickPayment = (data) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp18058468");

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 주문번호, 중복 안됨. 없애면 자동 생성
        name: "포인트 충전",
        amount: data.price,
        buyer_email: "xxx@000.com",
        buyer_name: "xxx",
        buyer_tel: "010-0000-0000",
        buyer_addr: "서울특별시 영등포구",
        buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/boards/payment",
        // 모바일
      },
      async (rsp) => {
        if (rsp.success) {
          console.log(rsp);

          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          setIsPointOpen(false);
          message.success("결제에 성공하셨습니다");

          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // const paymentDate = new Date();
          // ex, createPointTransactionOfLoading
          // router.push("/payment.success.tsx");
        } else {
          // 결제 실패 시 로직,
          message.error("결제에 실패했습니다. 다시 시도해주세여!");
        }
      }
    );
  };

  return (
    <>
      <P.Wrapper>
        <h1>결제하기</h1>
        <br />

        <div>
          <Head>
            <script
              type="text/javascript"
              src="https://code.jquery.com/jquery-1.12.4.min.js"
            ></script>

            <script
              type="text/javascript"
              src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
            ></script>
          </Head>

          <select onChange={onChangePrice}>
            {/* <select name = 'price' value={optionsState}> */}
            <option value={100}> 100원 </option>
            <option value={500}> 500원 </option>
            <option value={1000}> 1000원 </option>
            <option value={2000}> 2000원 </option>
          </select>
          <br />

          <button onClick={onClickPayment}>결제하기</button>
        </div>
      </P.Wrapper>
    </>
  );
}
