export default function Main() {
    return (
        <>
            <div className="w-full absolute bottom-0">
                <div className="p-5 text-[11px] text-darker/40 dark:text-white/30">
                    Created with ❤️ by
                    <a href="https://ovni.dev" target="_blank" title="ovni.dev" className="text-darker/60 dark:text-white/60 ml-[4px] font-inter-bold hover:text-primary duration-300">
                        ovni.dev
                    </a>
                </div>
            </div>
            <div className="absolute bottom-0 right-0">
                <div className="p-5 text-[11px] text-darker/40 dark:text-white/30">
                    The creator of this site is not responsible for lost passwords or misuse of the system.
                </div>
            </div>
        </>
    )  
}