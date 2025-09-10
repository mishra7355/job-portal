// // app/layout.tsx
// import type { Metadata } from "next";
// import "../globals.css";

// export const metadata: Metadata = {
//   title: "HireCoop",
//   description: "Job Portal",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="flex h-screen">
//         {/* Sidebar */}
//         <aside className="w-64 bg-purple-800 text-white flex flex-col justify-between">
//           <div>
//             <div className="p-4 text-2xl font-bold text-pink-300">HireCoop</div>
//             <nav className="flex flex-col mt-6 space-y-2">
//               <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
//                 Dashboard
//               </a>
//               <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
//                 Jobs
//               </a>
//               <a href="#" className="px-4 py-2 bg-purple-700 rounded">
//                 Create Job
//               </a>
//               <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
//                 Candidates
//               </a>
//               <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
//                 All Interview
//               </a>
//               <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
//                 Analytics
//               </a>
//             </nav>
//           </div>
//           <div className="p-4 border-t border-purple-600">
//             <p className="text-sm">John Doe</p>
//             <p className="text-xs text-purple-300">john@findmyjob.com</p>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col">
//           {/* Header */}
//           <header className="h-16 bg-white shadow flex items-center justify-between px-6">
//             <h1 className="text-lg font-medium">Hello Olivia!</h1>
//             <div className="w-10 h-10 rounded-full bg-green-600"></div>
//           </header>

//           {/* Page Content */}
//           <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "HireCoop",
  description: "Job Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        {/* Page wrapper */}
        <div className="flex h-full">
          {/* Sidebar */}
          <aside className="w-64 bg-purple-800 text-white flex flex-col justify-between">
            <div>
              {/* Logo Section */}
              <div className="p-4 bg-white text-purple-800 font-extrabold text-2xl tracking-wide  shadow-md">
                Hire<span className="text-pink-500">Coop</span>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex flex-col mt-6 space-y-2">
                <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
                  Dashboard
                </a>
                <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
                  Jobs
                </a>
                <a href="#" className="px-4 py-2 bg-purple-700 rounded">
                  Create Job
                </a>
                <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
                  Candidates
                </a>
                <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
                  All Interview
                </a>
                <a href="#" className="px-4 py-2 hover:bg-purple-700 rounded">
                  Analytics
                </a>
              </nav>
            </div>

            {/* Footer User Info */}
            <div className="p-4 border-t border-purple-600">
              <p className="text-sm font-semibold">John Doe</p>
              <p className="text-xs text-purple-300">john@findmyjob.com</p>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="h-16 bg-white shadow flex items-center justify-between px-6">
              <h1 className="text-lg font-medium">Hello Olivia!</h1>
              <div className="w-10 h-10 rounded-full bg-green-600"></div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
