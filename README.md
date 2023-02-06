<h1>Пакет базовых стилизованных компонентов.</h1>

`@nord-clan/ui-kit`

<a href="https://nord-clan-ui-kit.vercel.app">Предварительный просмотр компонентов</a>

<a href="http://harbor.nordclan:4873/-/web/detail/@nord-clan/ui-kit">Package source</a>

<br />
Утилиты для разработки
<details>
  <summary><a href="https://www.npmjs.com/package/pnpm">pnpm</a></summary>

On macOS, Linux, or Windows Subsystem for Linux:

```shell
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

On Windows (using PowerShell):

```shell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

На Alpine Linux

```shell
wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm
```

Using npm:

```shell
npx pnpm add -g pnpm
```

(По желанию) pnpm использует форматы npm конфигурации. Следовательно, вы должны задавать конфигурации так же, как и для npm:

```shell
pnpm config set store-dir /path/to/.pnpm-store
```

</details>

<details>
  <summary><a href="https://github.com/nvm-sh/nvm">nvm</a></summary>

Установка Linux

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Установка Windows

```shell
https://github.com/coreybutler/nvm-windows/releases
```

После установки nvm

```shell
nvm use
```

</details>

<br />

> Для разворачивания storybook

```
pnpm/yarn storybook
```
