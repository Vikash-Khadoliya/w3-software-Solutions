import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

const aiTools = [
  { name: "Llama-2", icon: "🦙" },
  { name: "GPT-4", icon: "🤖" },
  { name: "PaLM-2", icon: "🌴" },
  { name: "DALL-E", icon: "🎨" },
  { name: "Claude", icon: "🧠" },
  { name: "Phi-2", icon: "Φ" },
  { name: "Whisper", icon: "🗣️" },
  { name: "Stable Diffusion", icon: "🌌" },
  { name: "Google Gemini", icon: "♊" },
];

const vrWomanImg =
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#1a1a23] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="flex-1 max-w-xl">
          <div className="uppercase text-xs tracking-widest text-[#7dd3fc] font-semibold mb-3">
            EMPOWER YOUR BUSINESS
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            WE HELP ECOMMERCE <br className="hidden md:block" />
            BUSINESSES SUCCEED
          </h1>
          {/* AI Tools Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center bg-[#23272f] rounded-lg shadow-md py-3 px-2 hover:bg-[#2a2e39] transition"
              >
                <span className="text-2xl mb-1">{tool.icon}</span>
                <span className="text-xs font-medium text-[#7dd3fc]">{tool.name}</span>
              </div>
            ))}
          </div>
          <p className="text-[#cbd5e1] mb-8">
            Delivering cutting-edge solutions on the Magento, Shopify, BigCommerce platforms. Our experts develop top-quality ecommerce websites for global brands.
          </p>
          <Button
            size="lg"
            className="bg-[#7dd3fc] text-[#18181b] font-bold flex items-center gap-2 hover:bg-[#38bdf8] transition"
          >
            <Coffee className="w-5 h-5" />
            Share Your Ideas
          </Button>
        </div>
        {/* Right Column */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={vrWomanImg}
            alt="VR Woman"
            className="rounded-2xl shadow-2xl w-full max-w-sm object-cover"
            style={{
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.45)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
} 