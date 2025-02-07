```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="https://cdn.skypack.dev/@ionic/core@7/css/core.css" />
    <link rel="stylesheet" type="text/css" href="https://cdn.skypack.dev/@ionic/core@7/css/ionic.bundle.css" />

    <script>
      window.Ionic = {
        config: {
          mode: 'ios',
        },
      };
    </script>
  </head>

  <body>
    <ion-app>
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="#"></ion-back-button>
          </ion-buttons>
          <ion-title>Display</ion-title>
          <ion-buttons slot="end">
            <ion-button color="dark">
              <ion-icon slot="icon-only" ios="person-circle-outline" md="person-circle"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list-header>Appearance</ion-list-header>
        <ion-list inset="true">
          <ion-item button="true">Text Size</ion-item>
          <ion-item>
            <ion-toggle justify="space-between">Bold Text</ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list-header>Brightness</ion-list-header>
        <ion-list inset="true">
          <ion-item>
            <ion-range value="40">
              <ion-icon name="sunny-outline" slot="start"></ion-icon>
              <ion-icon name="sunny" slot="end"></ion-icon>
            </ion-range>
          </ion-item>
          <ion-item>
            <ion-toggle justify="space-between" checked>True Tone</ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list inset="true">
          <ion-item button="true">
            <ion-label>Night Shift</ion-label>
            <ion-text slot="end" color="medium">9:00 PM to 8:00 AM</ion-text>
          </ion-item>
        </ion-list>
      </ion-content>

      <script>
        // Use matchMedia to check the user preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        toggleDarkTheme(prefersDark.matches);

        // Listen for changes to the prefers-color-scheme media query
        prefersDark.addEventListener('change', (mediaQuery) => toggleDarkTheme(mediaQuery.matches));

        // Add or remove the "dark" class on the document body
        function toggleDarkTheme(shouldAdd) {
          document.body.classList.toggle('dark', shouldAdd);
        }
      </script>

      <style>
        /*
      * Optional CSS
      * -----------------------------------
      */

        /* This sets a different background and item background in light mode on ios */
        .ios body {
          --ion-background-color: #f2f2f6;
          --ion-toolbar-background: var(--ion-background-color);
          --ion-item-background: #fff;
        }

        /* This sets a different background and item background in light mode on md */
        .md body {
          --ion-background-color: #f9f9f9;
          --ion-toolbar-background: var(--ion-background-color);
          --ion-item-background: #fff;
        }

        /* This is added for the flashing that happens when toggling between themes */
        ion-item {
          --transition: none;
        }
      </style>
    </ion-app>
  </body>
</html>
```
