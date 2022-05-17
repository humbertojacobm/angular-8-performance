In angular 8 Ivy

we can preload many components using this

app-rouiting.module.ts
```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
```
preloadingStrategy

En una red lenta 3g, al cargar todos los modulos en el inicio, la navegación se hace mucho mas rapido.
Ya no sufres en recarga todo en cada modulo en el 3g.

en networking en slow 3g , puedes probar con dispositivos lentos.
