import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      <span
        className={`${
          isDark ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-6 w-6 transform rounded-full bg-white dark:bg-gray-300 transition-transform duration-300 flex items-center justify-center`}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-gray-600" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </span>
    </button>
  )
}

export default ThemeToggle
