## Style Guide Projeto

### Classes
```
component.ts
class Name extends class_extends implements class_implements, class_implements {
    <!-- variaveis -->
    <!-- constructor -->
    <!-- ciclos de vida -->
    <!-- funcoes publicas -->
    <!-- funcoes protegidas -->
    <!-- funcoes privadas -->
    <!-- funcoes abstratas -->
}
```

```
component-base.ts
class Name {
    <!-- publicas variaveis -->
    <!-- privadas variaveis -->
    
    <!-- inputs -->
    <!-- outputs -->
    <!-- classes abstratas -->
}
```

### Estrutura de Arquivos
pasta.arquivo.ext

pasta -> sky-button
arquivo -> componente,module, route,service, pipe, interface, enum
ext -> .ts, .css,.html,

### Estrutura de css
- Ordem alfabetica
- Ordem de seletores
- Fixos e Tokens
#### Seletores
```
<div class='sky-row'>
  <div class='sky-col'>
  </div>
  <i class='sky-icon'></i>
</div>
```
#### CSS
```
.sky-row {
  background-color: var(--background-color);
  display: flex;

  border-style: solid; -> fixos
}

.sky-col { }

.sky-icon {}
```

#### Padrao de commits
```
prefixes(componente): mensagem `impetativa`
fix,bug,release,feat,docs
```
