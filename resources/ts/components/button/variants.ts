export type Variant = 'gray' | 'red' | 'green' | 'blue';
export type VariantClasses = string[];

const variants: Record<Variant, VariantClasses> = {
    gray: [],
    red: [],
    green: [],
    blue: [
        'bg-blue-900',
        'text-white',
        'hover:bg-blue-800',
        'focus:bg-blue-800',
    ],
};

export default variants;
