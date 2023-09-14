import React from "react";
import "./typography-styles.scss";

const variantClassMap: Record<string, string> = {
    "hero-title": "hero-title",
    "hero-subtitle": "hero-subtitle",
    "services-title": "services-title",
    "services-subtitle": "services-subtitle",
    "services-paragraph": "services-paragraph",
    "contact-title": "contact-title",
    "contact-paragraph": "contact-paragraph",
    "about-title": "about-title",
    "about-paragraph": "about-paragraph",
};

interface TypographyProps {
    variant: keyof typeof variantClassMap;
    children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    const className = `typography ${variantClassMap[variant]}`;

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Typography;