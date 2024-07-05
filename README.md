# Database of selection methods in consumer VR applications

## Contributing to the database

Community contributions are welcome! Please open a pull request with additions to [data_website.csv](src\public\data_website.csv) file. After we review the changes and approve them, they will appear on the website.

## Citing

If you find this work useful, consider citing it:

```bibtex
@inproceedings{anon2024selections,
      title={From Research to Practice: Survey and Taxonomy of Object Selection in Consumer VR Applications},
      author={Anonymous, Fox and Anonymous, Mouse and Anonymous, Llama and Anonymous, Bear},
      booktitle={Some Cool 2024 VR Interactions Conference},
      pages={1-11},
      year={2024}
}
```

## Development and deployment

Requires `node`, `yarn`.

### Installing dependencies

```bash
yarn install
```

### Development server

```bash
yarn dev
```

### Generate static pages

```bash
yarn generate
```

### Serve generated static pages to test locally

```bash
npx serve .output/public
```

### Deploy

```bash
scp -P PORT -r ./.output/public/ USER@IP:/home/www/website
```
