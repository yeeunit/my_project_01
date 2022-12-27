import {
  CloseOutlined,
  EditFilled,
  EnvironmentFilled,
  HeartFilled,
} from "@ant-design/icons";
import { KaKaoMap } from "../../../commons/map/index";
import Comment from "../comment/Comment.containter";
import * as A from "./MarketDetail.styles";
import Dompurify from "dompurify";

export default function DetailUI(props) {
  return (
    <A.DetailWrapper>
      <A.DetailHeader>
        <A.HeaderLeftBox>
          {props.data?.fetchUseditem.images?.[0] !== "" ? (
            <>
              <image
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`}
                alt="이미지"
              />
            </>
          ) : (
            <>
              <div className="default-img"></div>
            </>
          )}
        </A.HeaderLeftBox>
        <A.HeaderRightBox>
          <A.HeaderRightTitle>
            <p>{props.data?.fetchUseditem.name}</p>
            {props.userInfo?._id === props.data?.fetchUseditem.seller?._id && (
              <div>
                <EditFilled onClick={props.onClickUpdate} />
                <CloseOutlined onClick={props.onClickDelete} />
              </div>
            )}
          </A.HeaderRightTitle>
          <A.HeaderRightPrice>
            {props.data?.fetchUseditem.price}
            <span>원</span>
          </A.HeaderRightPrice>
          <A.HeaderRightContents>
            <p>{props.data?.fetchUseditem.remarks}</p>
            {props.data?.fetchUseditem.tags?.map((el, index) => (
              <div key={uuidv4()} className="tag">
                # {el}
              </div>
            ))}
          </A.HeaderRightContents>
          <A.HeaderRightBtnWrap>
            <A.BtnPick
              pickCount={props.data?.fetchUseditem.pickedCount}
              className="zzim"
              onClick={props.onClickPick}
            >
              <HeartFilled /> 찜 {props.data?.fetchUseditem.pickedCount}
            </A.BtnPick>
            <button
              className="bucket"
              onClick={props.onClickBucket(props.data)}
            >
              장바구니
            </button>
            <button
              className="purchase"
              onClick={props.onClickBuy(props.data?.fetchUseditem._id)}
            >
              바로구매
            </button>
          </A.HeaderRightBtnWrap>
        </A.HeaderRightBox>
      </A.DetailHeader>
      <A.DetailBody>
        <A.BodyLeft>
          <h1>상품정보</h1>
          {props.data?.fetchUseditem.images?.map((el, index) => (
            <div key={uuidv4()}>
              {el !== "" ? (
                <>
                  <image src={`https://storage.googleapis.com/${el}`} />
                </>
              ) : (
                <></>
              )}
            </div>
          ))}
          {typeof window !== "undefined" && (
            <A.BodyLeftContentsBox
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></A.BodyLeftContentsBox>
          )}
          <A.BodyLeftMapBox>
            <div className="title">
              <EnvironmentFilled />
              <span>거래지역</span>
            </div>
            <KaKaoMap
              data={props.data?.fetchUseditem}
              address={props.data?.fetchUseditem.useditemAddress?.address}
              width="100%"
              height="448px"
            />
          </A.BodyLeftMapBox>
        </A.BodyLeft>
        <A.BodyRight>
          <h1>상점정보</h1>
          <A.BodyRightProfile>
            <div className="circle"></div>
            <p>{props.data?.fetchUseditem.seller?.name}</p>
          </A.BodyRightProfile>
          <A.BodyRightCommentBox>
            <h1>댓글</h1>
            <A.BodyRightCommentWriteBox>
              <A.BodyRightCommentWrite {...props.register("contents")} />
              <A.BodyRightBtnWrap>
                <A.BodyRightBtn
                  onClick={props.handleSubmit(props.onClickCommentCreate)}
                >
                  작성하기
                </A.BodyRightBtn>
              </A.BodyRightBtnWrap>
            </A.BodyRightCommentWriteBox>
            <A.BodyRightCommentListBox>
              {props.dataUsedItemQuestions?.fetchUseditemQuestions.map(
                (el, index) => (
                  <Comment
                    key={uuidv4()}
                    userInfoId={props.userInfo?._id}
                    el={el}
                    useditemId={props.useditemId}
                  />
                )
              )}
            </A.BodyRightCommentListBox>
          </A.BodyRightCommentBox>
        </A.BodyRight>
      </A.DetailBody>
    </A.DetailWrapper>
  );
}
