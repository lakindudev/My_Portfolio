import { useState } from "react";
import { motion } from "framer-motion";

export default function SuccessComponent() {
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async () => {
    try {
      // Simulate the submission process
      // In a real case, replace this with your API call logic
      const success = Math.random() > 0.5; // Random success/failure for demo purposes

      if (success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>

        {/* Success Message */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-green-500"
          >
            <h2>Submission Successful!</h2>
          </motion.div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-red-500"
          >
            <h2>Submission Failed. Please try again.</h2>
          </motion.div>
        )}
      </div>
    </div>
  );
}
