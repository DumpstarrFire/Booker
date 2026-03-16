# Bookie

Bookie is a stupidly simple eBook management, designed for those who only need to organize books and send files to their eReader.

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/4c2c60f5-c55a-432c-af33-ed4fe8b4253a" />

## Features

- Multi-format support (EPUB, PDF, MOBI, AZW3, CBZ, etc.)
- Automatic metadata fetching
- Cover image extraction, search, and embedding
- Send to eReader via SMTP
- Configurable file rename schemes and folder organization
- PWA support
- Dark & Light mode for the UI
- Tagging (acts like shelves, but like complicated)
- Series support

## Metadata Basics
### Everything you need for eReader-relevant metadata

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/9d74ab24-ccd5-47b9-a366-6731eb7e1661" />

## Docker Compose

```yaml
services:
  bookie:
    container_name: bookie
    image: ghcr.io/sweatyeggs69/bookie:latest
    ports:
      - "5000:5000"
    volumes:
      - /path/to/config:/app/data
    restart: unless-stopped

```

## License

MIT
