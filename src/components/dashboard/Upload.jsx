import React, { useRef, useState } from "react";
import UploadTable from "./UploadTable";

export default function Upload() {
  const [fileAdded, setFileAdded] = useState(false);

  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };
  const handleAddFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full  flex flex-col items- md:pt-[130px] pt-10 ">
      <h1 className="text-[18px] font-[600] md:hidden ml-10 mb-8">
        {" "}
        Upload CSV
      </h1>
      <div className="w-full h-full flex items-center justify-center">
        <div className=" md:w-[590px] w-[90vw] h-[350px] bg-white px-4 rounded-[12px] flex flex-col items-center justify-center">
          <label className="cursor-pointer w-full h-[240px] flex items-center justify-center bg-white border-dashed border-[1px] border-[#EBEBEB] rounded-[8px]">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <div className="flex flex-col items-center gap-4">
              <svg
                width="37"
                height="36"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_22_2724)">
                  <path
                    d="M22.7801 17.2998L10.9556 15.1998V30.7167C10.9556 31.4253 11.5264 31.9998 12.2305 31.9998H32.6341C33.3382 31.9998 33.9091 31.4253 33.9091 30.7167V24.9998L22.7801 17.2998Z"
                    fill="#185C37"
                  />
                  <path
                    d="M22.7802 4H12.2306C11.5264 4 10.9556 4.57446 10.9556 5.2831V11L22.7802 18L29.0402 20.1L33.9091 18V11L22.7802 4Z"
                    fill="#21A366"
                  />
                  <path d="M10.9556 11H22.7802V18H10.9556V11Z" fill="#107C41" />
                  <path
                    opacity="0.1"
                    d="M19.4185 9.60049H10.9556V27.1005H19.4185C20.1216 27.0982 20.6911 26.5251 20.6934 25.8174V10.8836C20.6911 10.1759 20.1216 9.60279 19.4185 9.60049Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M18.7229 10.3002H10.9556V27.8002H18.7229C19.4261 27.7979 19.9956 27.2248 19.9978 26.5171V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M18.7229 10.3002H10.9556V26.4002H18.7229C19.4261 26.3979 19.9956 25.8248 19.9978 25.1172V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M18.0273 10.3002H10.9556V26.4002H18.0273C18.7305 26.3979 19.3 25.8248 19.3023 25.1172V11.5833C19.3 10.8757 18.7305 10.3025 18.0273 10.3002Z"
                    fill="black"
                  />
                  <path
                    d="M5.27496 10.3002H18.0274C18.7315 10.3002 19.3023 10.8747 19.3023 11.5833V24.4171C19.3023 25.1258 18.7315 25.7002 18.0274 25.7002H5.27496C4.57082 25.7002 4 25.1258 4 24.4171V11.5833C4 10.8747 4.57082 10.3002 5.27496 10.3002Z"
                    fill="url(#paint0_linear_22_2724)"
                  />
                  <path
                    d="M7.94867 22.1706L10.6307 17.9881L8.17334 13.8287H10.1501L11.4912 16.4887C11.615 16.7414 11.6998 16.929 11.7457 17.0529H11.7631C11.8512 16.8513 11.944 16.6555 12.0413 16.4656L13.4749 13.8301H15.2896L12.7696 17.965L15.3536 22.1706H13.4227L11.8737 19.2509C11.8008 19.1267 11.7388 18.9962 11.6887 18.861H11.6658C11.6204 18.9934 11.5602 19.1203 11.4863 19.239L9.89138 22.1706H7.94867Z"
                    fill="white"
                  />
                  <path
                    d="M32.6342 4H22.7802V11H33.9091V5.2831C33.9091 4.57446 33.3383 4 32.6342 4Z"
                    fill="#33C481"
                  />
                  <path d="M22.7802 18H33.9091V25H22.7802V18Z" fill="#107C41" />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_22_2724"
                    x1="6.65832"
                    y1="9.29766"
                    x2="16.7396"
                    y2="26.6473"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18884F" />
                    <stop offset="0.5" stopColor="#117E43" />
                    <stop offset="1" stopColor="#0B6631" />
                  </linearGradient>
                  <clipPath id="clip0_22_2724">
                    <rect
                      width="29.9091"
                      height="28"
                      fill="white"
                      transform="translate(4 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h1>Drop your excel sheet here or browse</h1>

              {file && (
                <p
                  className="mt-4 text-red-500 cursor-pointer"
                  onClick={handleRemoveFile}
                >
                  Remove
                </p>
              )}
            </div>
          </label>

          <button className="w-full bg-[#605BFF] flex items-center justify-center py-4 mt-4 rounded-[8px]">
            {file ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#ffffff]"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <div
                onClick={handleAddFile}
                className="flex flex-row-reverse gap-2 text-white font-[600] "
              >
                Upload
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>
      <div
        className={
          file
            ? "md:mt-[100px] mt-12 overflow-x-auto md:ml-[84px] ml-6"
            : "hidden"
        }
      >
        <UploadTable />
      </div>
    </div>
  );
}
