# svelte-postcss

Essai de configuration simple de Svelte.js utilisant postcss (avec les plugins `postcss-preset-env` et Lost Grid).

https://preset-env.cssdb.org/
http://lostgrid.org/docs.html

Cette configuration, basée en partie sur https://gist.github.com/khaninD/0e9e2b6e1c72644a229d14cd97346740, n'utilise pas `rollup-plugin-postcss` mais `postcss` directement.

Important : il faut préciser `<style type="text/postcss">` (dans le bloc style) pour que le traitement ait bien lieu.

- On peut utiliser `@import` dans le bloc `<style></style>`, mais la racine est actuellement celle du projet.
- `postcss-preset-env` est probablement utilisé avec le "level" par défaut (2), ce qui exclut par exemple le nesting. (Je n'ai pas réussi à spécifier l'option `{level: 0}`).
