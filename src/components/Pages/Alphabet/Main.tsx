import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { getAlphabetList } from "@logic/alphabet"
import { openModal } from "@logic/modal"

import Modal from "@component/UI/Modal/Modal"
import CreateAlphabet from "@component/Form/Alphabet/Create"
import UpdateAlphabet from "@component/Form/Alphabet/Update"
import DeleteAlphabet from "@component/Form/Alphabet/Delete"

export default function Main() {

    const { t } = useTranslation([ "alphabet" ])

    const [ alphabetList, setAlphabetList ] = useState([])

    const updateAlphabetList = () => {
        setAlphabetList(getAlphabetList())
    }
    
    useEffect(() => { updateAlphabetList() }, [])

    return (
        <>
            { alphabetList && (
                <>
                    <div className="head">

                        <h2 className="title">
                            <i className={`align-middle mt-[-3px] mr-2 inline-block icon ti ti-sort-a-z`}></i> {t("head.title")}
                        </h2>

                        <span className="subtitle">

                            {t("head.subtitle")}

                            <button
                                name="How it works"
                                onClick={ () => openModal("info") }
                                className="text-[11px] text-darker dark:text-white hover:text-primary duration-300 rounded-full ml-2 align-middle mt-[-2px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-help fill-white dark:fill-darker">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                    <path d="M12 17l0 .01" />
                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                </svg>
                            </button>

                        </span>

                        <Modal
                            name="info"
                            title={t("modal.info.title")}
                        >
                            <div className="body" dangerouslySetInnerHTML={{ __html: t("modal.info.body") }} />
                        </Modal>

                        <div className="buttons">

                            <button
                                className="btn create"
                                onClick={ () => openModal("create-alphabet") }
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle mt-[-2px] inline-block mr-2 icon icon-tabler icons-tabler-outline icon-tabler-sort-a-z">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M16 8h4l-4 8h4" />
                                    <path d="M4 16v-6a2 2 0 1 1 4 0v6" />
                                    <path d="M4 13h4" />
                                    <path d="M11 12h2" />
                                </svg>

                                {t("head.button.create")}

                            </button>

                        </div>

                    </div>

                    <div className="body">

                        <Modal
                            name="create-alphabet"
                            title={t("modal.create.title")}
                        >
                            <CreateAlphabet onCreate={ () => setAlphabetList(getAlphabetList()) } />
                        </Modal>

                        <div className="list md:!grid-cols-3">

                            { alphabetList.map((alphabet: any, index: number) => (
                                <div
                                    className="box group"
                                    key={ index }
                                >
                                    <h2
                                        className="head"
                                    >
                                        { alphabet.name }

                                        <div className="float-right">
                                            <button
                                                className="button update"
                                                onClick={ () => openModal("update-alphabet-" + alphabet.aid) }
                                                name={t("button.update.name")}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle mt-[-4px] inline-block mr-2 icon icon-tabler icons-tabler-outline icon-tabler-edit">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                                    <path d="M16 5l3 3" />
                                                </svg>
                                            </button>

                                            <button
                                                className="button delete"
                                                onClick={ () => openModal("delete-alphabet-" + alphabet.aid) }
                                                name={t("button.delete.name")}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle mt-[-4px] inline-block mr-2 icon icon-tabler icons-tabler-outline icon-tabler-x">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M18 6l-12 12" />
                                                    <path d="M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                    </h2>

                                    <div className="body">
                                        <div className="mb-5 text-[14px]">
                                            { alphabet.description }
                                        </div>
                                        <textarea
                                            readOnly
                                            className="no-scrollbar resize-none"
                                            value={ alphabet.characters }
                                        ></textarea>
                                    </div>

                                    <Modal
                                        name={ "update-alphabet-" + alphabet.aid }
                                        title={t("modal.update.title")}
                                    >
                                        <UpdateAlphabet alphabetId={ alphabet.aid } onUpdate={ updateAlphabetList } />
                                    </Modal>

                                    <Modal
                                        name={ "delete-alphabet-" + alphabet.aid }
                                        title={t("modal.delete.title")}
                                    >
                                        <DeleteAlphabet alphabetId={ alphabet.aid } name={ alphabet.name } onDelete={ updateAlphabetList } />
                                    </Modal>

                                </div>

                            ))}

                        </div>

                        { alphabetList.length === 0 && (
                            <div className="bg-white dark:bg-black/10 border p-5 border-darker/10 dark:border-white/5 rounded-[4px] w-fit">
                                <p dangerouslySetInnerHTML={{ __html: t("empty") }} />
                            </div>
                        )}

                    </div>

                </>
            )}
        </>

    )
}