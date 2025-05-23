// PUBLIC_INTERFACE
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ProcureSync. All rights reserved.
        </div>
        <div className="text-gray-500 text-sm">
          Version 1.0.0
        </div>
      </div>
    </footer>
  );
}
