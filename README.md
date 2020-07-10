# Frontend Code Exercise

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Technical Decisions

I chose to use Angular and Bootstrap because I'm the most familiar with them and wanted to get started quickly. I like Angular's two-way data binding when it comes to rendering information in the DOM and I've previously worked in Angular shops.

I decided to use Bootstrap so that I could access its Components (specifically the cards and buttons) after looking at the example mockup.

I would have loved to have had more time and opportunity to explore the CMS Design System to get a better idea of the style preferences and how the CMS Design System balances accessibility with a mobile first .

### Editing/Removing a household member

In order to edit a member, I would have created a new route, "member/:id", and followed the pattern outlined in mock-data.ts. I would a button on each individual card to edit the member and another one to remove it. The "Edit Member" screen would show a form with the information and include a button at the bottom of it to "Save". When the save succeeds, the user would be routed to the "members" route.

The "Remove Member" screen would include a "Remove Member" and a "Cancel" button.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

