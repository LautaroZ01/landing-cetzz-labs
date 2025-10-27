import * as motion from "motion/react-client"
import type { IStep } from "../Process.astro";

type ProcessItemProps = {
    step: IStep
    children: React.ReactNode
}

export default function ProcessItem({ step, children }: ProcessItemProps) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`bg-primary-500 rounded-full p-5 w-[70px] h-[70px] flex justify-center items-center text-blue-100 transition-transform duration-300 ease-in-out lg:absolute z-30 shadow-xl shadow-primary-600/40 ${step.posClass}`}
            >
                {children}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: step.number % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className={`relative w-full px-6 ${step.posCard}`}
            >
                <span className="bg-gradient-to-b from-white/50 to-transparent bg-clip-text text-transparent absolute -top-10 lg:-top-4 right-2 -translate-x-1/2 lg:-translate-y-1/2 text-[6rem] lg:text-[8rem] font-bold -z-10 leading-none select-none opacity-60">
                    {step.number}
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                    {step.title}
                </h3>
                <p className="text-base text-slate-500 leading-relaxed">
                    {step.description}
                </p>
            </motion.div>
        </>
    )
}
