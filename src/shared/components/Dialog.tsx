"use client";

import { useState } from "react";

interface DialogProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  secondaryAction: () => void;
  primaryAction: () => void;
  secondaryActionText: string;
  primaryActionText: string;
  open: boolean;
  trigger: React.ReactNode;
}

export default function Dialog({
  title,
  description,
  children,
  secondaryAction,
  primaryAction,
  secondaryActionText,
  primaryActionText,
  open: initialOpen,
  trigger,
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <button onClick={toggle}>{trigger}</button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-foreground/50 h-screen w-screen"
          onClick={close}
        />
      )}
      {isOpen && (
        <dialog
          open={isOpen}
          onClose={close}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit max-w-screen-md  min-h-fit backdrop-blur-sm z-50 rounded-3xl overflow-hidden flex "
        >
          <div className="bg-white py-8 px-12 flex-1 rounded-lg  flex flex-col gap-6">
            <div>
              <h2 className="text-4xl tracking-tighter max-w-md mx-auto text-balance text-center font-semibold leading-tighter">
                {title}
              </h2>
              <p className="text-center mt-4 text-muted-foreground max-w-md mx-auto text-lg leading-tight">
                {description}
              </p>
            </div>
            {children && <div className="flex-1">{children}</div>}
            <div
              className="flex justify-center gap-3  items-end"
              onClick={close}
            >
              <button
                onClick={secondaryAction}
                className="text-muted-foreground hover:text-foreground transition-colors border border-border px-5 py-3 rounded-md"
              >
                {secondaryActionText}
              </button>
              <button
                onClick={primaryAction}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold"
              >
                {primaryActionText}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
