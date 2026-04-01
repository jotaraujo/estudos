# 🗂️ Kanban Engine

Uma aplicação de gerenciamento de tarefas no estilo Kanban, construída com React + Vite como exercício prático de aprendizado. Permite criar, mover entre colunas e excluir tarefas, com persistência automática via **LocalStorage** e **drag & drop profissional** implementado com dnd-kit.

---

## ✨ Funcionalidades

### 🎯 Gerenciamento de Tarefas
- ✅ **Criar tarefas** com título e descrição
- 🔄 **Mover tarefas** entre as colunas (To Do → Doing → Done) de **3 formas**:
  - 🖱️ **Drag & Drop** — Arraste suavemente com animações
  - 🔘 **Botões** — Clique para mover manualmente
  - ⌨️ **Teclado** — Acessibilidade com navegação por teclado
- 🗑️ **Excluir tarefas** individualmente ou quando concluídas
- 💾 **Persistência automática** no LocalStorage — as tarefas sobrevivem ao refresh da página
- 🌗 **Dark mode** automático via `prefers-color-scheme`
- 📱 **Layout responsivo** — em telas menores, as colunas empilham verticalmente

### ✨ Animações & UX
- 🎬 **Animações fluidas** ao arrastar cards (150ms cubic-bezier)
- 📦 **Layout animations** — cards se reorganizam suavemente
- 🖱️ **Cursor feedback** — `grab` indica área arrastável, `grabbing` durante drag
- ✨ **Visual feedback** — cards mudam opacidade e sombra durante drag
- 🎯 **Collision detection** — detecta corretamente a coluna de destino

### 🌓 Tema Claro e Escuro
- 🌙 **Toggle de tema** com ícones animados (Moon/Sun)
- 🎨 **Transições suaves** na mudança de cores (200ms)
- 💾 **Persistência** da preferência de tema em localStorage
- 🖥️ **Detecção automática** da preferência de sistema operacional
- 🔄 **Manual override** — força o tema mesmo que o sistema use outro

### 🎮 Suporte a Múltiplos Inputs
- 🖱️ **Mouse** — Drag & drop tradicional
- 👉 **Touch** — Suporte completo para mobile/tablet
- ⌨️ **Teclado** — TAB + ENTER/ESPAÇO para acessibilidade

---

## 🖼️ Layout

As tarefas são organizadas em **3 colunas horizontais**:

| To Do 🟡 | Doing 🟣 | Done 🟢 |
|---|---|---|
| Tarefas pendentes | Tarefas em andamento | Tarefas concluídas |

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19.2.4 | Biblioteca de UI |
| [Vite](https://vitejs.dev/) | 8.0.1 | Bundler e servidor de desenvolvimento |
| [dnd-kit](https://dndkit.com/) | 6.3.1 | Drag & drop moderno e acessível |
| [lucide-react](https://lucide.dev/) | Latest | Ícones SVG (Moon, Sun) |
| [CSS Modules](https://github.com/css-modules/css-modules) | - | Estilização com escopo local |
| LocalStorage API | - | Persistência de dados e preferências |
| Context API | - | Compartilhamento de estado |

### Pacotes dnd-kit Instalados
```json
{
  "@dnd-kit/core": "^6.3.1",        // Core drag & drop
  "@dnd-kit/sortable": "^10.0.0",   // Reordenação de itens
  "@dnd-kit/utilities": "^3.2.2",   // Utilitários (CSS.Transform)
  "@dnd-kit/dom": "^0.3.2"          // DOM layer
}
```

---

## 📁 Estrutura do Projeto

```
src/
├── index.css                    # Tokens CSS globais, dark mode e reset
├── main.jsx
├── App.jsx                      # Root component com header e tema
├── components/
│   ├── KanbanBoard.jsx          # DndContext, sensores, estado das tarefas
│   ├── Column.jsx               # Droppable container, filtra por status
│   ├── TaskItem.jsx             # Sortable card com drag handle
│   ├── TaskForm.jsx             # Formulário para adicionar tarefas
│   └── ThemeToggle.jsx          # Toggle button com ícones Moon/Sun
├── hooks/
│   └── useTheme.js              # Hook customizado para gerenciar tema
└── styles/
    ├── App.module.css           # Header com layout flexbox
    ├── KanbanBoard.module.css
    ├── Column.module.css
    ├── TaskItem.module.css
    ├── TaskForm.module.css
    └── ThemeToggle.module.css   # Animações do toggle e ícones
```

---

## ⚙️ Conceitos Praticados

### React Fundamentals
- **Componentes funcionais** e composição
- **useState** — gerenciamento de estado local
- **useEffect** — sincronização com LocalStorage
- **useContext + createContext** — Context API
- **Props e desestruturação**
- **Renderização condicional**
- **CSS Modules** — escopo local de estilos
- **Custom Hooks** — `useTheme()` para reutilização de lógica de tema

### Sistema de Tema
- **CSS Custom Properties (variáveis CSS)** — tokens reutilizáveis
- **data-* attributes** — manual override de tema
- **matchMedia API** — detecção de preferência de sistema
- **localStorage** — persistência de preferência do usuário
- **CSS transitions** — animações suaves entre temas
- **Ícones dinâmicos** — lucide-react importados condicionalmente

### Drag & Drop com dnd-kit
- **DndContext** — configuração de sensores e detecção de colisão
- **useSortable** — itens draggáveis com animação
- **useDroppable** — containers para receber itens
- **SortableContext** — contexto para reordenação
- **Sensors** — suporte a mouse, touch e teclado
- **Transform & CSS** — animações GPU-aceleradas
- **Event handling** — `stopPropagation()` para evitar conflitos
- **Drag handle pattern** — isolamento de área arrastável

### Performance & UX
- **GPU acceleration** com `transform` (não top/left)
- **cubic-bezier easing** — animações naturais
- **will-change** — otimização de performance
- **Lazy initialization** — leitura eficiente do localStorage
- **Collision detection** — closestCorners algorithm

---

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Node.js 18+

```bash
# 1. Clone o repositório
git clone https://github.com/jotaraujo/estudos.git

# 2. Entre no diretório do projeto
cd estudos/react/kanban-engine

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5174` no seu navegador (porta pode variar se 5173 já estiver em uso).

---

## 🧪 Como Usar

### Criar uma Tarefa
1. Digite o título e descrição no formulário no topo
2. Clique em "Criar tarefa"
3. A tarefa aparece na coluna "To Do"

### Mover uma Tarefa

**Opção 1: Drag & Drop** 🖱️
1. Passe o mouse sobre o **título** do card
2. Cursor muda para `grab` —  clique e arraste
3. Solte sobre a coluna desejada
4. Animação suave leva para o novo lugar

**Opção 2: Botões** 🔘
1. Clique nos botões do card:
   - `→ Doing` — To Do → Doing
   - `← To Do` — Doing → To Do
   - `→ Done` — Doing → Done
   - `← Doing` — Done → Doing

**Opção 3: Teclado** ⌨️
1. Use Tab para navegar até um card
2. Use Enter/Espaço para ativar ações (quando implementado)

### Excluir uma Tarefa
1. Clique no botão "Excluir" no card (coluna Done)
2. Tarefa é removida imediatamente

### Alternar Tema 🌓
1. Clique no botão no **topo direito** (ao lado do título)
2. Ícone alterna entre 🌙 (escuro) e ☀️ (claro)
3. **Animação suave** — cores mudam com transição de 200ms
4. **Preferência salva** — seu tema é lembrado na próxima visita
5. **Automático** — na primeira visita, usa a preferência do sistema

### Dark Mode Automático
- Se você não clicar no toggle, o projeto detecta automaticamente `prefers-color-scheme` do sistema
- Estilos mudam se seu SO estiver em dark mode

---

## 💡 Exemplos de Casos de Uso

```javascript
// Mover tarefa por ID (programaticamente)
handleNewStatus(taskId, 'inProgress')

// Obter tarefas de uma coluna específica
const todoTasks = tasks.filter(t => t.status === 'todo')

// Estrutura de uma tarefa
const task = {
  id: 1704067200000,           // Timestamp único
  title: "Implementar drag drop",
  description: "Usar dnd-kit",
  status: "inProgress"          // 'todo' | 'inProgress' | 'done'
}
```

---

## 📚 Aprendizados

Este projeto foi desenvolvido como exercício de fixação dos fundamentos do React com foco em:

- ✅ Fluxo unidirecional de dados (one-way data flow)
- ✅ State lifting para componente pai
- ✅ Context API como solução para prop drilling
- ✅ CSS Modules para escalabilidade
- ✅ **Custom Hooks** — reutilização de lógica com `useTheme()`
- ✅ **Sistema de Tema** — CSS custom properties e localStorage
- ✅ **Integração de biblioteca profissional** (dnd-kit)
- ✅ **Design de Ícones** — lucide-react com animações SVG
- ✅ **Padrões avançados** (drag handle, event propagation)
- ✅ **Otimização de performance** (GPU acceleration, will-change)
- ✅ **Acessibilidade** (teclado, sensores múltiplos, grab cursor)

---

## 🎓 Versão & Status

- **Versão:** 0.0.0 (Projeto educacional)
- **Status:** ✅ Funcional com todas as features
- **Última atualização:** Abril 2026

---

*Desenvolvido por [João Paulo Araujo](https://github.com/jotaraujo) · Exercícios de React com Drag & Drop profissional*
