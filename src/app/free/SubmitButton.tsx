'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import React from 'react'

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <>
            {pending && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 text-primary-500">
                        <svg
                            className="w-full h-full animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                    </div>
                </div>
            )}
            <button type="submit" className="block w-full rounded-md bg-[#1338BF] px-3.5 py-2.5 text-center text-lgfont-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                aria-disabled={pending}>
                Add
            </button>

        </>
    )
}
