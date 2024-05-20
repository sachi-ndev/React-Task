import React, { useState } from "react";

export default function UploadTable() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      links: "timesonline.co.uk",
      prefix: "QB0GaK7",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 2,
      links: "merriam-webster.com",
      prefix: "8oUTDyz",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 3,
      links: "newyorker.com",
      prefix: "Z9i2o9o",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 4,
      links: "angelfire.com",
      prefix: "pW44f49",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 5,
      links: "rambler.ru",
      prefix: "w1vDJvP",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 6,
      links: "timesonline.co.uk",
      prefix: "Uz3Uq87",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 7,
      links: "state.gov",
      prefix: "PwT2wMc",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 8,
      links: "youtube.com",
      prefix: "c1TO1x6",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 9,
      links: "washingtonpost.com",
      prefix: "4KtfXaU",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 10,
      links: "icq.com",
      prefix: "nh294Ty",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 11,
      links: "cbsnews.com",
      prefix: "0e56PW3",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 12,
      links: "google.pl",
      prefix: "NNq9FXo",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 13,
      links: "uiuc.edu",
      prefix: "55b5FKK",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 14,
      links: "creativecommons.org",
      prefix: "0Q43Q2J",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 15,
      links: "cam.ac.uk",
      prefix: "1dYVlCo",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 16,
      links: "microsoft.com",
      prefix: "5leG2TS",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 17,
      links: "ebay.co.uk",
      prefix: "2tYI62f",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 18,
      links: "ucsd.edu",
      prefix: "Dfdk2F4",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 19,
      links: "constantcontact.com",
      prefix: "6OFdyTY",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
    {
      id: 20,
      links: "seesaa.net",
      prefix: "IYU6iyo",
      selecttags: [
        "Technology",
        "Fashion",
        "Food",
        "Travel",
        "Sports",
        "Music",
        "Art",
        "Health",
        "Education",
        "Finance",
      ],
      selectedtags: [],
    },
  ]);

  const [openItemId, setOpenItemId] = useState(null);

  const handleSelect = (dataId, tag) => {
    setDatas((prevDatas) =>
      prevDatas.map((data) => {
        if (data.id === dataId) {
          return {
            ...data,
            selecttags: data.selecttags.filter((t) => t !== tag),
            selectedtags: [...data.selectedtags, tag],
          };
        }
        return data;
      })
    );
  };
  const handleRemove = (dataId, tag) => {
    setDatas((prevDatas) =>
      prevDatas.map((data) => {
        if (data.id === dataId) {
          return {
            ...data,
            selectedtags: data.selectedtags.filter((t) => t !== tag),
            selecttags: [...data.selecttags, tag],
          };
        }
        return data;
      })
    );
  };

  return (
    <div className="w-[1060px] ">
      <h1 className="text-[24px] font-[600]">Uploads</h1>

      <div className="w-full bg-[#F5F5F5] mt-11 rounded-[8px] p-4">
        <div className="flex items-center justify-between px-2 py-1  rounded-[6px] font-[600]">
          <p className="w-[10%]">Sl No.</p>
          <p className="w-[25%]">Links</p>
          <p className="w-[20%]">Prefix</p>
          <p className="w-[15%]">Add Tags</p>
          <p className="w-[30%]">Selected Tags</p>
        </div>
        {datas.map((data) => (
          <div className="flex items- justify-between  px-2 py-2 mt-2 text-[14px] bg-white rounded-[6px]">
            <p className="w-[10%]">{data.id}</p>
            <p className="w-[25%] cursor-pointer text-blue-500 underline">
              {data.links}
            </p>
            <p className="w-[20%]">{data.prefix}</p>
            <p className="w-[15%]">
              <select
                className="outline-none px-2 py-1 bg-slate-100"
                onChange={(e) => handleSelect(data.id, e.target.value)}
              >
                <option
                  className="w-full p-1 px3  z-20 bg-[#F5F5F5] rounded-[2px] outline-none"
                  value=""
                >
                  Select Tags
                </option>
                {data.selecttags.map((tag, index) => (
                  <option
                    className="w-full p-1 px3  z-20 bg-[#F5F5F5] rounded-[2px] outline-none"
                    key={index}
                    value={tag}
                  >
                    {tag}
                  </option>
                ))}
              </select>
            </p>

            <p className="w-[30%] flex flex-wrap gap-2 text-white uppercase font-[600] text-[10px]">
              {data.selectedtags.map((tag, index) => (
                <div className="flex items-center gap-1 w-fit p-1 px-2 rounded-[2px] bg-[#605BFF]">
                  <p key={index}>{tag}</p>
                  <button
                    className="text-[14px] mb-[2px]"
                    onClick={() => handleRemove(data.id, tag)}
                  >
                    x
                  </button>
                </div>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
