"use client";
import { RevealList, RevealWrapper } from "next-reveal";
import React from "react";

function HomeEight() {
  return (
    <section className="home-eight">
      <div className="_container">
        <RevealWrapper origin="bottom">
          <h2>
            Enlight offers everything you need <br />
            to optimise crypto marketing workflows!
          </h2>
        </RevealWrapper>
        <RevealList
          origin="bottom"
          interval={100}
          delay={0}
          className={"home-eight__body"}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M36.4844 1.32812H3.51562C1.57711 1.32812 0 2.90523 0 4.84375V27.6562C0 29.5948 1.57711 31.1719 3.51562 31.1719H14.8666L14.0073 36.3281H12.5C11.8528 36.3281 11.3281 36.8528 11.3281 37.5C11.3281 38.1472 11.8528 38.6719 12.5 38.6719H27.5C28.1472 38.6719 28.6719 38.1472 28.6719 37.5C28.6719 36.8528 28.1472 36.3281 27.5 36.3281H25.9927L25.1334 31.1719H36.4844C38.4229 31.1719 40 29.5948 40 27.6562V4.84375C40 2.90523 38.4229 1.32812 36.4844 1.32812ZM23.6166 36.3281H16.3834L17.2427 31.1719H22.7573L23.6166 36.3281ZM37.6562 27.6562C37.6562 28.3024 37.1305 28.8281 36.4844 28.8281C35.6483 28.8281 4.49633 28.8281 3.51562 28.8281C2.86945 28.8281 2.34375 28.3024 2.34375 27.6562V4.84375C2.34375 4.19758 2.86945 3.67188 3.51562 3.67188H18.8281V5C18.8281 5.64719 19.3528 6.17188 20 6.17188C20.6472 6.17188 21.1719 5.64719 21.1719 5V3.67188H36.4844C37.1305 3.67188 37.6562 4.19758 37.6562 4.84375V27.6562Z"
                fill="#97D80F"
              />
              <path
                d="M16.25 16.3281C15.6028 16.3281 15.0781 16.8528 15.0781 17.5V21.3281H12.4219V13.75C12.4219 13.1028 11.8972 12.5781 11.25 12.5781C10.6028 12.5781 10.0781 13.1028 10.0781 13.75V21.3281H7.42188V10C7.42188 9.35281 6.89719 8.82812 6.25 8.82812C5.60281 8.82812 5.07812 9.35281 5.07812 10V22.5C5.07812 23.1472 5.60281 23.6719 6.25 23.6719H16.25C16.8972 23.6719 17.4219 23.1472 17.4219 22.5V17.5C17.4219 16.8528 16.8972 16.3281 16.25 16.3281Z"
                fill="#97D80F"
              />
              <path
                d="M28.125 9.45312C24.3772 9.45312 21.3281 12.5022 21.3281 16.25C21.3281 18.0959 22.0681 19.772 23.2666 20.998C23.3205 21.0595 23.3179 21.0566 23.3769 21.1083C24.603 22.3068 26.2791 23.0469 28.125 23.0469C31.8728 23.0469 34.9219 19.9978 34.9219 16.25C34.9219 12.5022 31.8728 9.45312 28.125 9.45312ZM32.4205 15.0781H29.2969V11.9545C30.8118 12.3682 32.0068 13.5632 32.4205 15.0781ZM26.9531 11.9545V15.7646L24.2601 18.4577C22.8112 15.9312 24.1573 12.7181 26.9531 11.9545ZM25.9173 20.1149L28.6104 17.4219H32.4205C31.6557 20.2218 28.4404 21.5617 25.9173 20.1149Z"
                fill="#97D80F"
              />
            </svg>
            <span>Dashboards</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <path
                d="M33.315 2.1918H28.9146C27.7534 0.850703 26.0422 0 24.1353 0H17.8072C15.9003 0 14.189 0.850703 13.0279 2.1918H8.62747C6.68896 2.1918 5.11185 3.77203 5.11185 5.7143V36.4775C5.11185 38.4198 6.68896 40 8.62747 40H33.315C35.2535 40 36.8306 38.4198 36.8306 36.4775V5.7143C36.8306 3.77195 35.2535 2.1918 33.315 2.1918ZM17.8072 2.34836H24.1353C25.946 2.34836 27.4497 3.56047 27.9439 5.16633H13.9986C14.4918 3.56328 15.9936 2.34836 17.8072 2.34836ZM34.4868 36.4775C34.4868 37.1249 33.9611 37.6516 33.315 37.6516H8.62747C7.9813 37.6516 7.4556 37.1249 7.4556 36.4775V5.7143C7.4556 5.06687 7.9813 4.54016 8.62747 4.54016H11.7404C11.5713 5.11125 11.479 5.71516 11.479 6.34055C11.479 6.98898 12.0037 7.51469 12.6509 7.51469H29.2915C29.9387 7.51469 30.4634 6.98898 30.4634 6.34055C30.4634 5.71516 30.3711 5.11125 30.202 4.54016H33.315C33.9611 4.54016 34.4868 5.06687 34.4868 5.7143V36.4775Z"
                fill="#97D80F"
              />
              <path
                d="M15.1947 23.3315L13.4712 25.0582L13.0498 24.636C12.5922 24.1774 11.8502 24.1774 11.3926 24.636C10.9349 25.0946 10.9349 25.838 11.3926 26.2965L12.6426 27.5489C13.1001 28.0074 13.8422 28.0075 14.2998 27.5489L16.8519 24.9919C17.3095 24.5334 17.3095 23.7899 16.8519 23.3314C16.3943 22.8729 15.6522 22.8729 15.1947 23.3315Z"
                fill="#97D80F"
              />
              <path
                d="M29.6431 24.2661H20.19C19.5428 24.2661 19.0181 24.7918 19.0181 25.4403C19.0181 26.0887 19.5428 26.6144 20.19 26.6144H29.6431C30.2903 26.6144 30.815 26.0887 30.815 25.4403C30.815 24.7918 30.2903 24.2661 29.6431 24.2661Z"
                fill="#97D80F"
              />
              <path
                d="M15.1947 30.0634L13.4712 31.7902L13.0498 31.368C12.5922 30.9094 11.8502 30.9094 11.3926 31.368C10.9349 31.8265 10.9349 32.5699 11.3926 33.0284L12.6426 34.2809C13.1001 34.7394 13.8422 34.7395 14.2998 34.2809L16.8519 31.7238C17.3095 31.2653 17.3095 30.5219 16.8519 30.0634C16.3943 29.6048 15.6522 29.6048 15.1947 30.0634Z"
                fill="#97D80F"
              />
              <path
                d="M29.6431 30.998H20.19C19.5428 30.998 19.0181 31.5237 19.0181 32.1722C19.0181 32.8206 19.5428 33.3463 20.19 33.3463H29.6431C30.2903 33.3463 30.815 32.8206 30.815 32.1722C30.815 31.5237 30.2903 30.998 29.6431 30.998Z"
                fill="#97D80F"
              />
              <path
                d="M23.2061 18.8341L26.8306 15.2026V15.3425C26.8306 15.9909 27.3553 16.5166 28.0025 16.5166C28.6497 16.5166 29.1744 15.9909 29.1744 15.3425C29.1744 12.0211 29.1798 12.3304 29.1609 12.1992C29.078 11.6247 28.5865 11.1936 28.0021 11.1937H25.0337C24.3865 11.1937 23.8619 11.7194 23.8619 12.3679C23.8619 13.0163 24.3865 13.542 25.0337 13.542H25.1733L22.3775 16.3433L18.8311 12.7901C18.3735 12.3315 17.6315 12.3315 17.1738 12.7901L12.9551 17.0171C12.4974 17.4756 12.4974 18.219 12.9551 18.6776C13.4126 19.1361 14.1547 19.1361 14.6123 18.6776L18.0025 15.2808L21.5489 18.8341C22.0064 19.2926 22.7485 19.2927 23.2061 18.8341Z"
                fill="#97D80F"
              />
            </svg>
            <span>Reports</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <g clip-path="url(#clip0_9_592)">
                <path
                  d="M37.4268 27.0312C35.8991 27.0312 34.5965 28.011 34.1128 29.375H28.7648L27.6112 27.1466C29.9103 27.14 31.7788 25.2106 31.7788 22.8397C31.7788 20.6373 30.1667 18.8158 28.0947 18.5626C27.9828 17.7442 27.6078 17.012 27.0614 16.458L28.9097 10.625H34.1128C34.5965 11.989 35.8991 12.9688 37.4268 12.9688C39.3653 12.9688 40.9424 11.3916 40.9424 9.45312C40.9424 7.51461 39.3653 5.9375 37.4268 5.9375C35.8991 5.9375 34.5965 6.91727 34.1128 8.28125H28.0518C27.541 8.28125 27.089 8.61211 26.9347 9.09914L24.9322 15.4187C24.4778 15.369 24.0326 15.4077 23.6151 15.5237C23.2153 14.893 22.7034 14.3522 22.1143 13.9252V6.82969C23.4783 6.34594 24.4581 5.04336 24.4581 3.51562C24.4581 1.57711 22.881 0 20.9424 0C19.0039 0 17.4268 1.57711 17.4268 3.51562C17.4268 5.04336 18.4066 6.34594 19.7706 6.82969V12.9322C18.7778 12.7619 17.7458 12.8655 16.7781 13.2572L14.9918 8.99977C14.8092 8.56445 14.3832 8.28125 13.9112 8.28125H7.77213C7.28838 6.91727 5.9858 5.9375 4.45807 5.9375C2.51955 5.9375 0.942444 7.51461 0.942444 9.45312C0.942444 11.3916 2.51955 12.9688 4.45807 12.9688C5.9858 12.9688 7.28838 11.989 7.77213 10.625H13.132L14.8011 14.6033C13.7932 15.657 13.1657 17.1003 13.1539 18.6928C11.3974 19.2026 10.106 20.8687 10.106 22.8396C10.106 25.2146 11.981 27.1469 14.2855 27.1469H14.3274L13.1929 29.375H7.77213C7.28838 28.011 5.9858 27.0312 4.45807 27.0312C2.51955 27.0312 0.942444 28.6084 0.942444 30.5469C0.942444 32.4854 2.51955 34.0625 4.45807 34.0625C5.9858 34.0625 7.28838 33.0827 7.77213 31.7188H13.9112C14.352 31.7188 14.7555 31.4714 14.9555 31.0787L16.9576 27.147H19.7706V33.1704C18.4066 33.6541 17.4268 34.9567 17.4268 36.4845C17.4268 38.423 19.0039 40.0001 20.9424 40.0001C22.881 40.0001 24.4581 38.423 24.4581 36.4845C24.4581 34.9567 23.4783 33.6541 22.1143 33.1704V27.147H24.9721L27.0111 31.0857C27.2124 31.4745 27.6139 31.7188 28.0518 31.7188H34.1128C34.5965 33.0827 35.8991 34.0625 37.4268 34.0625C39.3653 34.0625 40.9424 32.4854 40.9424 30.5469C40.9424 28.6084 39.3653 27.0312 37.4268 27.0312ZM37.4268 8.28125C38.073 8.28125 38.5987 8.80695 38.5987 9.45312C38.5987 10.0993 38.073 10.625 37.4268 10.625C36.7806 10.625 36.2549 10.0993 36.2549 9.45312C36.2549 8.80695 36.7806 8.28125 37.4268 8.28125ZM20.9424 2.34375C21.5886 2.34375 22.1143 2.86945 22.1143 3.51562C22.1143 4.1618 21.5886 4.6875 20.9424 4.6875C20.2963 4.6875 19.7706 4.1618 19.7706 3.51562C19.7706 2.86945 20.2963 2.34375 20.9424 2.34375ZM4.45807 10.625C3.8119 10.625 3.28619 10.0993 3.28619 9.45312C3.28619 8.80695 3.8119 8.28125 4.45807 8.28125C5.10424 8.28125 5.62994 8.80695 5.62994 9.45312C5.62994 10.0993 5.10424 10.625 4.45807 10.625ZM4.45807 31.7188C3.8119 31.7188 3.28619 31.193 3.28619 30.5469C3.28619 29.9007 3.8119 29.375 4.45807 29.375C5.10424 29.375 5.62994 29.9007 5.62994 30.5469C5.62994 31.193 5.10424 31.7188 4.45807 31.7188ZM20.9424 37.6562C20.2963 37.6562 19.7706 37.1305 19.7706 36.4844C19.7706 35.8382 20.2963 35.3125 20.9424 35.3125C21.5886 35.3125 22.1143 35.8382 22.1143 36.4844C22.1143 37.1305 21.5886 37.6562 20.9424 37.6562ZM12.4499 22.8397C12.4499 21.7255 13.3217 20.8282 14.3667 20.8785C15.1317 20.9128 15.7203 20.2221 15.5709 19.4773C15.1267 17.2652 16.7291 15.1968 18.8471 15.1968C20.2312 15.1968 21.4904 16.1165 21.9806 17.4854C22.2515 18.242 23.1896 18.5088 23.8181 18.0037C24.7698 17.2385 26.0854 18.2447 25.7296 19.4759C25.4774 20.3495 26.276 21.1671 27.1559 20.9339C28.3185 20.6252 29.4351 21.5717 29.4351 22.8397C29.4351 23.9223 28.6116 24.8032 27.5994 24.8032H14.2856C13.2734 24.8031 12.4499 23.9223 12.4499 22.8397ZM37.4268 31.7188C36.7806 31.7188 36.2549 31.193 36.2549 30.5469C36.2549 29.9007 36.7806 29.375 37.4268 29.375C38.073 29.375 38.5987 29.9007 38.5987 30.5469C38.5987 31.193 38.073 31.7188 37.4268 31.7188Z"
                  fill="#97D80F"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_592">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0.942444)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Integrations</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <g clip-path="url(#clip0_9_595)">
                <path
                  d="M30.8288 16.0797L29.2663 13.3734C28.9976 12.9077 28.4463 12.6848 27.9292 12.8326L26.2871 13.3023C25.6027 12.7528 24.837 12.309 24.0259 11.992L23.6131 10.3408C23.4827 9.81914 23.014 9.45312 22.4763 9.45312H19.3513C18.8135 9.45312 18.3448 9.81914 18.2144 10.3408L17.8016 11.992C16.9906 12.3091 16.2247 12.7528 15.5404 13.3023L13.8982 12.8326C13.3813 12.6845 12.8298 12.9077 12.5611 13.3734L10.9986 16.0797C10.7298 16.5454 10.8123 17.1343 11.1988 17.508L12.4245 18.6933C12.3551 19.1335 12.32 19.5709 12.32 20C12.32 20.4291 12.3551 20.8665 12.4246 21.3067L11.1989 22.492C10.8123 22.8657 10.7298 23.4546 10.9987 23.9203L12.5612 26.6266C12.8299 27.0923 13.3809 27.3151 13.8983 27.1674L15.5405 26.6977C16.2248 27.2472 16.9906 27.691 17.8016 28.008L18.2145 29.6592C18.3448 30.1809 18.8135 30.5469 19.3513 30.5469H22.4763C23.014 30.5469 23.4827 30.1809 23.6131 29.6592L24.0259 28.008C24.837 27.6909 25.6028 27.2472 26.2871 26.6977L27.9292 27.1674C28.446 27.3154 28.9975 27.0923 29.2663 26.6266L30.8288 23.9203C31.0977 23.4546 31.0152 22.8657 30.6286 22.492L29.403 21.3068C29.4724 20.8665 29.5075 20.4291 29.5075 20C29.5075 19.5709 29.4724 19.1335 29.4029 18.6932L30.6285 17.508C31.0152 17.1343 31.0977 16.5454 30.8288 16.0797ZM26.99 18.5623C27.1053 19.0513 27.1638 19.5349 27.1638 20C27.1638 20.4651 27.1053 20.9488 26.99 21.4377C26.8952 21.8397 27.0191 22.262 27.316 22.5491L28.3416 23.5408L27.6941 24.6623L26.3211 24.2695C25.9238 24.156 25.4958 24.26 25.195 24.5435C24.4858 25.2121 23.6255 25.7107 22.707 25.9855C22.3108 26.1041 22.0064 26.4227 21.9061 26.824L21.5613 28.2031H20.2663L19.9214 26.8241C19.8211 26.4227 19.5167 26.1041 19.1205 25.9856C18.202 25.7108 17.3417 25.2122 16.6325 24.5436C16.3316 24.2601 15.9038 24.156 15.5064 24.2696L14.1334 24.6623L13.4859 23.5409L14.5115 22.5491C14.8084 22.262 14.9323 21.8398 14.8375 21.4377C14.7222 20.9488 14.6638 20.4651 14.6638 20C14.6638 19.5349 14.7222 19.0512 14.8375 18.5623C14.9323 18.1603 14.8084 17.738 14.5115 17.4509L13.4859 16.4592L14.1334 15.3377L15.5064 15.7305C15.9038 15.8442 16.3318 15.7401 16.6325 15.4565C17.3417 14.7879 18.202 14.2893 19.1205 14.0145C19.5167 13.8959 19.8211 13.5773 19.9214 13.176L20.2663 11.7969H21.5613L21.9061 13.1759C22.0064 13.5773 22.3108 13.8959 22.707 14.0144C23.6255 14.2892 24.4858 14.7878 25.195 15.4564C25.4959 15.7399 25.9238 15.8441 26.3211 15.7304L27.6941 15.3377L28.3416 16.4591L27.316 17.4509C27.0191 17.738 26.8952 18.1603 26.99 18.5623Z"
                  fill="#97D80F"
                />
                <path
                  d="M20.9138 16.4844C18.9752 16.4844 17.3981 18.0615 17.3981 20C17.3981 21.9385 18.9752 23.5156 20.9138 23.5156C22.8523 23.5156 24.4294 21.9385 24.4294 20C24.4294 18.0615 22.8523 16.4844 20.9138 16.4844ZM20.9138 21.1719C20.2676 21.1719 19.7419 20.6462 19.7419 20C19.7419 19.3538 20.2676 18.8281 20.9138 18.8281C21.5599 18.8281 22.0856 19.3538 22.0856 20C22.0856 20.6463 21.5599 21.1719 20.9138 21.1719Z"
                  fill="#97D80F"
                />
                <path
                  d="M40.4952 16.5526C39.9994 16.1366 39.2602 16.2013 38.8441 16.6971L38.5348 17.0657C37.9341 13.4104 36.2144 10.0418 33.5432 7.37059C30.272 4.09934 25.9552 2.2534 21.3465 2.14458L19.1173 0.274185C18.6216 -0.14183 17.8823 -0.0771429 17.4663 0.418638C17.0503 0.91442 17.115 1.65364 17.6108 2.06965L17.9794 2.37895C14.3241 2.97965 10.9556 4.69942 8.2843 7.37059C5.01305 10.6418 3.16711 14.9586 3.05829 19.5673L1.18797 21.7964C0.771957 22.2922 0.836645 23.0314 1.33243 23.4474C1.82821 23.8634 2.56743 23.7987 2.98344 23.3029L3.29274 22.9343C3.89344 26.5896 5.61321 29.9582 8.28438 32.6294C11.5556 35.9007 15.8723 37.7466 20.4811 37.8554L22.7102 39.7258C23.2059 40.1418 23.9452 40.0772 24.3612 39.5814C24.7772 39.0856 24.7126 38.3464 24.2167 37.9304L23.8481 37.6211C27.5034 37.0204 30.872 35.3006 33.5432 32.6294C36.8145 29.3582 38.6604 25.0415 38.7692 20.4327L40.6396 18.2036C41.0555 17.7078 40.9909 16.9686 40.4952 16.5526ZM23.6263 35.2792L23.9509 34.8922C24.367 34.3965 24.3023 33.6573 23.8065 33.2412C23.3107 32.8252 22.5715 32.8899 22.1555 33.3857L20.3759 35.5065C12.9856 35.2534 6.89079 29.8082 5.63461 22.7125L6.02157 23.0372C6.51735 23.4532 7.25649 23.3885 7.67258 22.8927C8.0886 22.3969 8.02391 21.6577 7.52813 21.2417L5.40727 19.4621C5.6604 12.0718 11.1056 5.977 18.2013 4.72083L17.8766 5.10778C17.4606 5.60356 17.5253 6.3427 18.0211 6.75879C18.5169 7.17481 19.2561 7.11012 19.6721 6.61434L21.4517 4.49348C28.842 4.74661 34.9368 10.1918 36.193 17.2875L35.806 16.9629C35.3102 16.5468 34.5711 16.6115 34.155 17.1073C33.739 17.6031 33.8036 18.3423 34.2995 18.7583L36.4203 20.5379C36.1672 27.9282 30.722 34.023 23.6263 35.2792Z"
                  fill="#97D80F"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_595">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0.913757)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Automations</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <g clip-path="url(#clip0_9_600)">
                <path
                  d="M6.55566 20.8631C9.26824 20.9034 11.0923 17.9121 9.86126 15.5237L13.8933 11.4917C15.089 12.3477 16.6882 12.4061 17.9414 11.6538L21.9085 13.7244C22.2563 15.4025 23.7459 16.6676 25.5256 16.6676C27.9675 16.709 29.8092 14.1977 29.0556 11.8845L33.3237 7.61642C35.7152 8.89394 38.7415 7.05608 38.7046 4.3317C38.7046 2.29486 37.0475 0.637763 35.0106 0.637763C32.3249 0.602581 30.4856 3.54846 31.6848 5.93837L27.6611 9.96216C25.8864 8.65079 23.224 9.32551 22.2549 11.2595L19.4865 9.81455C19.9934 8.49348 19.7161 6.93794 18.6528 5.87457C15.9087 3.1749 11.4154 5.9275 12.5074 9.56077L8.20283 13.8653C6.82039 13.1778 5.0941 13.4084 3.94363 14.5589C1.61814 16.8738 3.31136 20.8851 6.55566 20.8631ZM35.0107 2.98327C35.7543 2.98327 36.3592 3.58817 36.3592 4.33178C36.2914 6.11827 33.7297 6.1178 33.6622 4.33178C33.6622 3.58817 34.2671 2.98327 35.0107 2.98327ZM25.5257 11.625C25.9556 11.625 26.3381 11.8279 26.5853 12.1421C26.625 12.2257 26.6741 12.3059 26.7348 12.3801C27.1848 13.2388 26.5011 14.3461 25.5257 14.322C23.7392 14.2543 23.7395 11.6925 25.5257 11.625ZM15.0871 7.53292C15.6129 7.00714 16.4685 7.00714 16.9942 7.53292C17.5213 8.05964 17.5198 8.91872 16.9907 9.44326C15.6779 10.6521 13.8737 8.84148 15.0871 7.53292ZM5.60206 16.2172C6.12792 15.6915 6.98332 15.6914 7.50919 16.2172C8.03497 16.743 8.03497 17.5986 7.50919 18.1244C6.19797 19.3396 4.38701 17.5281 5.60206 16.2172Z"
                  fill="#97D80F"
                />
                <path
                  d="M39.7201 37.017H38.4415V13.6959C38.4415 13.0483 37.9164 12.5232 37.2687 12.5232H32.7527C32.105 12.5232 31.5799 13.0483 31.5799 13.6959V37.017H28.9564V21.761C28.9564 21.1134 28.4313 20.5883 27.7836 20.5883H23.2676C22.6199 20.5883 22.0949 21.1134 22.0949 21.761V37.017H19.4713V18.7983C19.4713 18.1506 18.9463 17.6255 18.2986 17.6255H13.7826C13.135 17.6255 12.6099 18.1506 12.6099 18.7983V37.0169H9.98635V24.732C9.98635 24.0843 9.46127 23.5593 8.8136 23.5593H4.29764C3.64997 23.5593 3.12489 24.0843 3.12489 24.732V37.0169H2.05776C1.41009 37.0169 0.88501 37.542 0.88501 38.1897C0.88501 38.8373 1.41009 39.3624 2.05776 39.3624H39.7201C41.2598 39.3116 41.2867 37.0789 39.7201 37.017ZM5.47039 37.017V25.9048H7.64085V37.0169H5.47039V37.017ZM14.9555 37.017V19.971H17.1259V37.0169H14.9555V37.017ZM24.4404 37.017V22.9338H26.611V37.017H24.4404ZM33.9254 37.017V14.8687H36.096V37.017H33.9254Z"
                  fill="#97D80F"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_600">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0.88501)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Analytics</span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <g clip-path="url(#clip0_9_604)">
                <path
                  d="M16.1072 6.37524C15.4609 6.37524 14.937 6.89922 14.937 7.54552V7.61519C14.937 8.2615 15.4609 8.78547 16.1072 8.78547C16.7535 8.78547 17.2775 8.2615 17.2775 7.61519V7.54552C17.2775 6.89922 16.7536 6.37524 16.1072 6.37524Z"
                  fill="#97D80F"
                />
                <path
                  d="M11.4261 6.37524C10.7798 6.37524 10.2559 6.89922 10.2559 7.54552V7.61519C10.2559 8.2615 10.7798 8.78547 11.4261 8.78547C12.0724 8.78547 12.5964 8.2615 12.5964 7.61519V7.54552C12.5964 6.89922 12.0725 6.37524 11.4261 6.37524Z"
                  fill="#97D80F"
                />
                <path
                  d="M6.74505 6.37524C6.09874 6.37524 5.57477 6.89922 5.57477 7.54552V7.61519C5.57477 8.2615 6.09874 8.78547 6.74505 8.78547C7.39135 8.78547 7.91532 8.2615 7.91532 7.61519V7.54552C7.91532 6.89922 7.39143 6.37524 6.74505 6.37524Z"
                  fill="#97D80F"
                />
                <path
                  d="M31.4865 11.7077V2.9016C31.4865 2.2553 30.9625 1.73132 30.3162 1.73132H2.02648C1.38017 1.73132 0.856201 2.2553 0.856201 2.9016V29.8477C0.856201 30.494 1.38017 31.018 2.02648 31.018H15.1997C17.4894 35.3272 22.0252 38.2686 27.2357 38.2686C34.7461 38.2686 40.8562 32.1585 40.8562 24.6482C40.8562 18.6216 36.9215 13.4975 31.4865 11.7077ZM33.2217 15.0919L27.2357 22.7481L21.2498 15.0918C22.9858 14.0005 25.0382 13.3682 27.2357 13.3682C29.4334 13.3682 31.4857 14.0006 33.2217 15.0919ZM3.19676 4.07188H29.1459V11.1623C28.5216 11.0743 27.8841 11.0277 27.2358 11.0277C27.2348 11.0277 27.2338 11.0277 27.2328 11.0277H3.19676V4.07188ZM14.2237 28.6775H3.19676V13.3683H19.6094C15.9949 15.8199 13.6152 19.9614 13.6152 24.6482C13.6152 26.0504 13.8283 27.4036 14.2237 28.6775ZM27.2357 35.9282C21.0159 35.9282 15.9557 30.868 15.9557 24.6482C15.9557 21.4662 17.2806 18.5881 19.4071 16.5353L26.3137 25.3691C26.3147 25.3704 26.3164 25.3711 26.3175 25.3723C26.5318 25.6438 26.863 25.8185 27.2357 25.8185H38.4551C37.8679 31.4904 33.0604 35.9282 27.2357 35.9282ZM29.6363 23.478L35.0643 16.5354C36.9267 18.3333 38.1742 20.7641 38.4552 23.478H29.6363Z"
                  fill="#97D80F"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_604">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0.856201)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Visualisation</span>
          </div>
        </RevealList>
      </div>
    </section>
  );
}

export default HomeEight;
