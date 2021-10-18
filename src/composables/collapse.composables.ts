import { ComputedRef, InjectionKey, inject, provide } from 'vue';

interface CollapseContext {
   activeCollapse: ComputedRef<symbol | null>;
   multipleActiveCollapse: ComputedRef<symbol[]>;
   isMultiple: ComputedRef<boolean>;
   setActive: (id: symbol) => void;
}

const injectionKey: InjectionKey<CollapseContext> = Symbol('collapse-key');

export const provideCollapse = (param: CollapseContext) => provide(injectionKey, param);
export const useCollapse = () => inject(injectionKey)!;
