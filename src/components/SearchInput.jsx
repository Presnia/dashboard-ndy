import React from 'react';

import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';

const SearchInput = () => {
    const { setIsClicked, initialState } = useStateContext();
    return (
        <div className="bg-half-transparent w-full h-screen fixed nav-item top-0 left-0">
            <div className=" w-full bg-white dark:bg-[#484B52] p-5">
                <div className="flex justify-between items-center gap-5">
                    <div className="e-float-input e-control-wrapper e-outline">
                        <input
                            className="e-control e-textbox e-lib"
                            type="text"
                            id="textbox_5"
                            name="textbox_5"
                            aria-labelledby="label_textbox_5"
                            value=""
                            onChange={() => {}}
                            placeholder="Search..."
                        />
                    </div>
                    <button
                        type="button"
                        className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        onClick={() => {
                            setIsClicked(initialState);
                        }}
                        style={{
                            color: 'rgb(153, 171, 180)',
                            borderRadius: '50%',
                        }}
                    >
                        <MdOutlineCancel />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
