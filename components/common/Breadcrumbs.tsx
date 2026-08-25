"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  pageName: string;
  description?: string;
}

const Breadcrumb = ({ pageName, description }: BreadcrumbProps) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const generateBreadcrumbs = () => {
    const breadcrumbs = [{ name: 'Home', href: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({ name, href: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 p-20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-8/12">
            {/* Modern Breadcrumb Navigation */}
            <nav className="mb-8 flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.href} className="flex items-center">
                  {index === 0 ? (
                    <Link
                      href={crumb.href}
                      className="flex items-center gap-1 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-white/60 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                    >
                      <Home className="h-4 w-4" />
                      <span className="hidden sm:inline">{crumb.name}</span>
                    </Link>
                  ) : index === breadcrumbs.length - 1 ? (
                    <span className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 text-white shadow-lg">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-white/60 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                    >
                      {crumb.name}
                    </Link>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                  )}
                </div>
              ))}
            </nav>

            {/* Page Header */}
            <div className="mb-8 max-w-[600px] md:mb-0 lg:mb-12">
              <h1 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-black text-transparent dark:from-white dark:to-gray-300 sm:text-5xl lg:text-6xl">
                {pageName}
              </h1>
              {description && (
                <p className="text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              )}
            </div>
          </div>
          
          <div className="w-full px-4 lg:w-4/12">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
              <div className="relative rounded-2xl bg-white/80 p-8 backdrop-blur-sm dark:bg-gray-800/80">
                <div className="text-center">
                  <div className="mb-4 text-4xl">🧠</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Learn • Act • Save Lives
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-600/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-pink-400/30 to-red-600/30 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Breadcrumb;