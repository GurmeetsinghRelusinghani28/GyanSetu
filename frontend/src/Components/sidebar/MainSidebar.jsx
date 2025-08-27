// src/components/MainSidebar.jsx
import cn from "../../lib/utils.js";
import { Link } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp, animate = true }) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children, open, setOpen, animate }) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </>
  );
};

export const DesktopSidebar = ({ className, children, ...props }) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-[600px] z-50 rounded-2xl px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[270px] shrink-0",
        className
      )}
      animate={{
        width: animate ? (open ? "225px" : "60px") : "250px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export const MobileSidebar = ({ className, children, ...props }) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      {/* Sticky Header (Top bar with menu button) */}
      <div
        className={cn(
          "fixed top-28 left-0 px-4 h-12 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full shadow-md z-[80]",
          className
        )}
        {...props}
      >
        <IconMenu2
          className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Spacer to push main content below header */}
      <div className="h-12 md:hidden" />

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[90]"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar itself */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "fixed left-0 h-full w-[70%] max-w-xs bg-white dark:bg-neutral-900 p-6 z-[100] flex flex-col shadow-lg",
                className
              )}
            >
              {/* Close button */}
              <div
                className="absolute right-4 top-4 text-neutral-800 dark:text-neutral-200 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <IconX />
              </div>

              {/* Sidebar content */}
              <div className="mt-10">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
