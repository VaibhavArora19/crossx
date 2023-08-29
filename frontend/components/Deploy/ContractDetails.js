import React from "react";

const ContractDetails = ({ setPage, formData, setFormData }) => {
  const nextPageHandler = () => {
    setPage((currPage) => currPage + 1);
  };

  const previousPageHandler = () => {
    setPage((currPage) => currPage - 1);
  };
  return (
    <div className="text-white w-[550px] bg-[#1E1E1E] py-10 px-10 rounded-2xl border border-gray-700">
      <h2 className="text-2xl font-semibold mb-7">Contract details</h2>
      <p>show contract name and other details here</p>
      <div className="flex flex-col ">
        <div className="flex justify-between mt-6">
          <p></p>
          <button
            onClick={nextPageHandler}
            type="button"
            className="py-3 px-7 rounded-md bg-[#161616] hover:bg-[#111111] text-gray-300 border border-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractDetails;
