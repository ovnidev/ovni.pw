import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { openModal } from "@logic/modal"
import Modal from "@component/UI/Modal/Modal"

import { getPasswordCount } from "@logic/password"
import { getFolderCount } from "@logic/folder"
import { getAlphabetCount } from "@logic/alphabet"
import { showAlert } from "@logic/alert"

export default function Main(props: { masterPassword: string, onMasterPassword: (password: string) => void }) {

    const { masterPassword, onMasterPassword } = props

    const { t } = useTranslation("home")

    const [ passwordCount, setPasswordCount ] = useState(0)
    const [ folderCount, setFolderCount ] = useState(0)
    const [ alphabetCount, setAlphabetCount ] = useState(0)

    const handleSubmit = (event: any) => {

        event.preventDefault()

        if(event.target.password.value === '') return showAlert('Please enter your master password', 'error', 'exclamation-circle', 5000)

        onMasterPassword(event.target.password.value)

    }

    useEffect(() => {
        setPasswordCount(getPasswordCount())
        setFolderCount(getFolderCount())
        setAlphabetCount(getAlphabetCount())
    }, [])

    return (
        <>
            <div className="body">

                <div className="mt-[120px]">

                    <h2
                        className="text-[18px] md:text-[50px] font-inter-black text-center"
                    >
                        {t("title")}
                    </h2>

                    <div className="text-center text-[20px] opacity-80 mt-[-5px]">
                        {t("subtitle")}
                    </div>

                    <div className="mt-10 flex justify-center gap-5">

                        { masterPassword === '' && (
                            <form
                                onSubmit={ handleSubmit }
                                className=""
                            >
                                <input
                                    placeholder={t("form.input.placeholder")}
                                    type="password"
                                    name="password"
                                    className="w-full block text-[14px] md:text-[20px] text-center mx-auto px-3 py-4 border dark:border-white/5 border-darker/10 rounded-[4px] bg-white dark:bg-black/10"
                                />
                                <button
                                    type="submit"
                                    className="w-full mt-5 block mx-auto rounded-[4px] bg-primary/5 dark:bg-primary/5 hover:bg-primary hover:dark:bg-primary duration-300 text-[16px] text-primary dark:text-white font-inter-bold p-5 md:px-28 md:py-5 border border-primary hover:text-white mb-2 md:mb-0"
                                >
                                    {t("form.submit")}
                                </button>
                            </form>

                        )}

                        { masterPassword !== '' && (
                            <>
                                <div className="bg-white border-darker/10 dark:bg-white/[1%] border text-center dark:border-white/5 rounded-[4px] p-5 pb-8 md:mb-0 mb-5">
                                    <div className="font-inter-black text-[50px] px-20">
                                        { passwordCount }
                                    </div>
                                    <div className="text-[18px]">
                                        { passwordCount === 1 ? t("blocks.password.singular") : t("blocks.password.plural") }
                                    </div>
                                </div>
                                <div className="bg-white border-darker/10 dark:bg-white/[1%] border text-center dark:border-white/5 rounded-[4px] p-5 pb-8 md:mb-0 mb-5">
                                    <div className="font-inter-black text-[50px] px-20">
                                        { folderCount }
                                    </div>
                                    <div className="text-[18px]">
                                        { folderCount === 1 ? t("blocks.folder.singular") : t("blocks.folder.plural") }
                                    </div>
                                </div>
                                <div className="bg-white border-darker/10 dark:bg-white/[1%] border text-center dark:border-white/5 rounded-[4px] p-5 pb-8">
                                    <div className="font-inter-black text-[50px] px-20">
                                        { alphabetCount }
                                    </div>
                                    <div className="text-[18px]">
                                        { alphabetCount === 1 ? t("blocks.alphabet.singular") : t("blocks.alphabet.plural") }
                                    </div>
                                </div>
                            </>
                        )}

                    </div>

                    <div className="flex justify-center mt-20 gap-5">

                        <button
                            ria-label={t("buttons.info")}
                            onClick={ () => openModal("info") }
                            className="border border-darker/10 dark:border-white/10 bg-darker/[0.01] dark:bg-white/[0.02] hover:dark:bg-white/[0.05] hover:bg-white duration-300 px-4 py-3 rounded-[4px]"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 align-middle mt-[-2px] icon icon-tabler icons-tabler-outline icon-tabler-help fill-white dark:fill-darker">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 17l0 .01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>

                            {t("buttons.info")}

                        </button>

                        <button
                            ria-label={t("buttons.use")}
                            onClick={ () => openModal("use") }
                            className="border border-darker/10 dark:border-white/10 bg-darker/[0.01] dark:bg-white/[0.02] hover:dark:bg-white/[0.05] hover:bg-white duration-300 px-4 py-3 rounded-[4px]"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 align-middle mt-[-2px] icon icon-tabler icons-tabler-outline icon-tabler-help fill-white dark:fill-darker">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 17l0 .01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>

                            {t("buttons.use")}

                        </button>

                        <button
                            ria-label={t("buttons.faq")}
                            onClick={ () => openModal("faq") }
                            className="border border-darker/10 dark:border-white/10 bg-darker/[0.01] dark:bg-white/[0.02] hover:dark:bg-white/[0.05] hover:bg-white duration-300 px-4 py-3 rounded-[4px]"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 align-middle mt-[-2px] icon icon-tabler icons-tabler-outline icon-tabler-help fill-white dark:fill-darker">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 17l0 .01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>

                            {t("buttons.faq")}

                        </button>

                        <Modal
                            name="info"
                            title={t("modal.info.title")}
                        >
                            <div className="body" dangerouslySetInnerHTML={{ __html: t("modal.info.body") }} />
                        </Modal>

                        <Modal
                            name="use"
                            title={t("modal.use.title")}
                        >
                            <div className="body" dangerouslySetInnerHTML={{ __html: t("modal.use.body") }} />
                        </Modal>

                        <Modal
                            name="faq"
                            title={t("modal.faq.title")}
                        >
                            <div className="body faq" dangerouslySetInnerHTML={{ __html: t("modal.faq.body") }} />
                        </Modal>

                    </div>

                </div>

            </div>

        </>
    )
}
