import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { motion, useAnimationControls } from "framer-motion"

export default function Language() {

    const { i18n, t } = useTranslation("globals")

    const [ open, setOpen ] = useState(false)

    const controls = useAnimationControls()

    const handleLanguageButton = () => {
        open ? controls.start('hidden') : controls.start('visible')
        setOpen(!open)
    }

    const handleLanguageSelection = (event: any, language: string) => {
        event.preventDefault()
        i18n.changeLanguage(language)
        setLocalLanguage(language)
        handleLanguageButton()
    }

    const langContainerVariants = {
        hidden: {
            display: "none",
            opacity: 0,
        },
        visible: {
            display: "block",
            opacity: 1,
            transition: { type: 'spring', delay: 0.1 },
        },
        exit: {
            y: '-100px',
            transition: { ease: 'easeInOut' },
        }
    }

    const getLocalLanguage = () => {
        const storageLang = window.localStorage.getItem("lang")
        if(storageLang) i18n.changeLanguage(storageLang)
    }

    const setLocalLanguage = (language: string) => {
        window.localStorage.setItem("lang", language)
    }

    useEffect(() => { getLocalLanguage() }, [])

	return (
		<>

            <button
                onClick={ handleLanguageButton }
                className="button cursor-pointer mt-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-language">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 5h7" />
                    <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
                    <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
                    <path d="M12 20l4 -9l4 9" />
                    <path d="M19.1 18h-6.2" />
                </svg>
            </button>

            <motion.div
                variants={ langContainerVariants }
                animate={ controls }
                initial="hidden"
                exit="exit"
                className="absolute bottom-[100px] z-50 left-[50px] w-max bg-white dark:bg-white/5 rounded-md backdrop-blur-md border dark:border-white/10"
            >
                <button
                    className="text-[13px] font-inter text-darker hover:bg-darker/5 hover:dark:bg-white/5 duration-300 dark:text-white px-2 py-1 border-b border-darker/10 dark:border-white/10 w-full block"
                    onClick={ (event) => handleLanguageSelection(event, "en") }
                >
                    {t("language.english")}
                </button>
                <button
                    className="text-[13px] font-inter text-darker hover:bg-darker/5 hover:dark:bg-white/5 duration-300 dark:text-white px-2 py-1 w-full"
                    onClick={ (event) => handleLanguageSelection(event, "es") }
                >
                    {t("language.spanish")}
                </button>
            </motion.div>

		</>
	)
}