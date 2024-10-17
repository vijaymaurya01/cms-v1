import React, { useState } from 'react';
import * as Dialog from "@radix-ui/react-dialog";

export default function Success({ email }) {
    const [isOpen, setIsOpen] = useState(true); // Modal open state

    const handleClose = () => {
        setIsOpen(false); // Close the modal when the Close button is clicked
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-40" />
                <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg mx-auto px-4">
                    <div className="bg-white rounded-md shadow-lg px-4 py-6">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-green-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <Dialog.Title className="text-lg font-medium text-gray-800 text-center mt-3">
                            Successfully Signed Up!
                        </Dialog.Title>
                        <Dialog.Description className="mt-1 text-sm leading-relaxed text-center text-gray-500">
                            Welcome, <strong>{email}</strong>! Your account has been successfully created.
                        </Dialog.Description>
                        <div className="mt-3 text-center">
                            <Dialog.Close asChild>
                                <button
                                    onClick={handleClose}
                                    className="w-full mt-2 p-2.5 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                    aria-label="Close"
                                >
                                    Close
                                </button>
                            </Dialog.Close>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
