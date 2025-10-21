import { useState, useEffect } from 'react';
import { motion } from 'motion/react';



export default function Typewriter() {
    const messages = [
        "Diseño web & tecnología.",
        "Inicia tu proyecto.",
        "Diseñamos tu web a medida.",
        "¡Empecemos!"
    ]

    const typingSpeed = 100
    const deletingSpeed = 50
    const delayBetweenTexts = 1500

    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const handleTyping = () => {
            const fullText = messages[currentTextIndex];

            if (isDeleting) {
                setCurrentText(prev => fullText.substring(0, prev.length - 1));
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentTextIndex(prev => (prev + 1) % messages.length);
                }
            } else {

                setCurrentText(prev => fullText.substring(0, prev.length + 1));
                if (currentText.length === fullText.length) {
                    setTimeout(() => setIsDeleting(true), delayBetweenTexts);
                }
            }
        }

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        )

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentTextIndex, messages, typingSpeed, deletingSpeed, delayBetweenTexts]);

    return (
        <motion.h2
            className="lg:text-4xl text-2xl font-bold mb-4 mt-2 flex items-center justify-center lg:justify-start gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
                <span>{currentText}</span>
                <span className="cursor animate-pulse block lg:min-h-10 min-h-8 w-1 bg-gray-400 rounded-full"></span>
        </motion.h2>
    );
};