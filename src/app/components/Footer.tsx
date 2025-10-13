// components/Footer.tsx
export default function Footer(){
    return (
    <footer className="bg-delacroixBlue text-delacroixCream mt-12">
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
    <div className="text-sm">© {new Date().getFullYear()} Delacroix Apartments. All rights reserved.</div>
    <div className="flex gap-4 mt-4 md:mt-0">
    <a href="#">Instagram</a>
    <a href="#">Facebook</a>
    <a href="#">Twitter</a>
    </div>
    </div>
    </footer>
    )
    }
    