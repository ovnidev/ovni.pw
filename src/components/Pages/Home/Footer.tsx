import { useTranslation } from "react-i18next"

export default function Main() {

    const { t } = useTranslation("globals")

    return (
        <>
            <div className="w-full absolute bottom-0">
                <div className="p-5 text-[11px] text-darker/40 dark:text-white/30">
                    {t("footer.createdby")}
                    <a href="https://ovni.dev" target="_blank" title="ovni.dev" className="text-darker/60 dark:text-white/60 ml-[4px] font-inter-bold hover:text-primary duration-300">
                        ovni.dev
                    </a>
                </div>
            </div>
            <div className="absolute bottom-0 right-0">
                <div className="p-5 text-[11px] text-darker/40 dark:text-white/30">
                    {t("footer.legal")}
                </div>
            </div>
        </>
    )  
}