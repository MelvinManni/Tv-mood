# TVmood

Tvmood is a television app built using React and Redux. It is a feature rich app for checking movies and tv series.

---

## Outline

- Getting Started
- Test
- Architecture
- Are there any improvements I could make to my submission ?
- What would I do differently if I were allocated more time?

---

### Getting Started

To run the app on your local device, download the app or clone the repo to you device.

In the app folder run

```bash
$npm install
```

or

```bash
$yarn install
```

To run the app on your local sever run

```bash
$npm start
```

this will start up the app on [http://localhost:3000/](http://localhost:3000/)

To run test on the app

```bash
$npm test
```

### Test

Test on the app was carried with **jest** and **\*react testing library**. Test was written to check if all pages is rendered correctly without breaking.

---

### Architecture

The Architectural choice is based mainly on structure and form of data being passed. The view gets data from _a centralized model(redux store)_. While the the model calls the _api where the required data is hosted_. The idea of a centralized data center is what influenced the Architecture used.

---

### - Are there any improvements i could make to my submission ?

Yes, there are a few improvements I will like to make and that is on the test.

---

### What would I do differently if I were allocated more time?

I will try to learn alot more on tests(Currently doing this) and run more tests and maybe tweak the UI a little bit.
