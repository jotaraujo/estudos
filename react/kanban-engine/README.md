# 🗂️ Kanban Engine

Uma aplicação de gerenciamento de tarefas no estilo Kanban, construída com React + Vite como exercício prático de aprendizado. Permite criar, mover entre colunas e excluir tarefas, com persistência automática via **LocalStorage**.

---

## ✨ Funcionalidades

- ✅ **Criar tarefas** com título e descrição
- 🔄 **Mover tarefas** entre as colunas (To Do → Doing → Done)
- 🗑️ **Excluir tarefas** individualmente
- 💾 **Persistência automática** no LocalStorage — as tarefas sobrevivem ao refresh da página
- 🌗 **Dark mode** automático via `prefers-color-scheme`
- 📱 **Layout responsivo** — em telas menores, as colunas empilham verticalmente

---

## 🖼️ Layout

As tarefas são organizadas em **3 colunas horizontais**:

| To Do 🟡 | Doing 🟣 | Done 🟢 |
|---|---|---|
| Tarefas pendentes | Tarefas em andamento | Tarefas concluídas |

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [React 19](https://react.dev/) | Biblioteca de UI |
| [Vite](https://vitejs.dev/) | Bundler e servidor de desenvolvimento |
| [CSS Modules](https://github.com/css-modules/css-modules) | Estilização com escopo local por componente |
| LocalStorage API | Persistência de dados no navegador |
| Context API | Compartilhamento de estado entre componentes |

---

## 📁 Estrutura do Projeto

```
src/
├── index.css                    # Tokens CSS globais, dark mode e reset
├── main.jsx
├── App.jsx
├── components/
│   ├── KanbanBoard.jsx          # Gerencia o estado e a lógica das tarefas
│   ├── Column.jsx               # Renderiza uma coluna filtrando por status
│   ├── TaskItem.jsx             # Card individual de cada tarefa
│   └── TaskForm.jsx             # Formulário para adicionar novas tarefas
└── styles/
    ├── KanbanBoard.module.css
    ├── Column.module.css
    ├── TaskItem.module.css
    └── TaskForm.module.css
```

---

## ⚙️ Conceitos praticados

- **Componentes funcionais** e composição de componentes
- **useState** — gerenciamento de estado local
- **useEffect** — efeitos colaterais (sincronização com LocalStorage)
- **useContext + createContext** — Context API para evitar prop drilling
- **Props e desestruturação**
- **Renderização condicional** com `&&` e ternários
- **CSS Modules** — escopo local de estilos sem conflito de nomes
- **Lazy initialization** do `useState` para leitura eficiente do LocalStorage

---

## 🚀 Como rodar localmente

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

Acesse `http://localhost:5173` no seu navegador.

---

## 📚 Aprendizados

Este projeto foi desenvolvido como exercício de fixação dos fundamentos do React, com foco em:

- Entender o fluxo unidirecional de dados (one-way data flow)
- Praticar o levantamento de estado (_state lifting_) para o componente pai
- Aplicar Context API como solução para prop drilling em árvores de componentes
- Organizar estilos de forma escalável com CSS Modules

---

*Desenvolvido por [João Paulo Araujo](https://github.com/jotaraujo) · Exercícios de React*
