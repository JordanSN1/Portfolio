import { motion, AnimatePresence } from 'framer-motion';

interface ProjectPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}

export default function ProjectPopup({ isOpen, onClose, title, message }: ProjectPopupProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative bg-white dark:bg-dark p-6 rounded-xl max-w-md w-full mx-4"
                >
                    <h3 className="text-xl font-bold text-dark dark:text-white mb-4">{title}</h3>
                    <p className="text-gray-custom mb-6">{message}</p>
                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-violet/90 transition-colors"
                        >
                            Fermer
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
} 