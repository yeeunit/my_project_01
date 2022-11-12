import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { UPLOAD_FILE } from "../../../commons/uploads/01/Upload.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

const initialInputs = { writer: "", password: "", title: "", contents: "" };

export default function BoardWrite(props) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [inputs, setInputs] = useState(initialInputs);
  const [inputsError, setInputsError] = useState(initialInputs);

  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  // const fileRef = useRef(null);

  // const [writer, setWriter] = useState("");
  // const [password, setPassword] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  // const [uploadFile] = useMutation(UPLOAD_FILE);
  // const [emailError, setEmailError] = useState("");

  const onChangeInputs = (event) => {
    const _inputs = {
      ...inputs,
      [event.target.id]: event.target.value,
    };
    setInputs(_inputs);
    if (event.target.value !== "") {
      setInputsError({
        ...inputsError,
        [event.target.id]: "",
      });
    }

    if (Object.values(_inputs).every((el) => el)) {
      setInputs(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeUrl = (event) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onCompletePostcode = (data) => {
    console.log(data);
    setIsModalVisible(false);
  };

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onClickRegister = async () => {
    const errors = {
      writer: "작성자를 입력해주세요",
      password: "비밀번호를 입력해주세요",
      title: "제목을 입력해주세요",
      contents: "내용을 입력해주세요",
    };
    Object.keys(inputs).forEach((el) => {
      if (!inputs[el]) {
        setInputsError({
          ...inputsError,
          [el]: errors[el],
        });
      }
    });
    if (Object.values(inputs).every((el) => el)) {
      try {
        const result = await createBoard({
          variables: {
            ...inputs,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: [...fileUrls],
          },
        });
        console.log(result.data?.createBoard._id);
        Modal.success({ content: "게시글 등록에 성공했습니다" });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error.message);
        Modal.error({ content: "등록 실패!!" });
      }
    }
  };

  return (
    <>
      <BoardWriteUI
        isActive={isActive}
        inputsError={inputsError}
        onChangeInputs={onChangeInputs}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        zipcode={zipcode}
        address={address}
        addressDetail={addressDetail}
        onChangeAddressDetail={onChangeAddressDetail}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        onChangeFileUrls={onChangeFileUrls}
        onClickRegister={onClickRegister}
        onChangeFile={onChangeFile}
        onClickImage={onClickImage}
        fileRef={fileRef}
        imageUrl={imageUrl}
        //
        showModal={showModal}
        isModalVisible={isModalVisible}
        onCompletePostcode={onCompletePostcode}
        onChangeAddress={onChangeAddress}
      />
    </>
  );
}
