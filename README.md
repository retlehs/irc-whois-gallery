# IRC Whois Gallery

A collection of `/whois` output themes from classic IRC clients, showcasing the elaborate ASCII art and creative text formatting that was characteristic of IRC customization culture in the late 1990s and early 2000s.

**[View the gallery →](https://retlehs.github.io/irc-whois-gallery/)**

## Development

This site is built with [11ty](https://11ty.dev/) using the [ZeroPoint](https://github.com/MWDelaney/ZeroPoint) starter template.

### Local Setup

```bash
npm install
npm run dev
```

## Contributing

To add new `/whois` screenshots:

1. Add your PNG screenshot to the root directory with the naming format: `whois-[client]-[theme].png`
2. Update `src/data/gallery.json` with the new entry:
   ```json
   {
     "name": "Theme Name",
     "filename": "whois-client-theme.png",
     "client": "IRC Client Name",
     "addon": "Addon/Script Name"
   }
   ```
3. Submit a pull request

Screenshots should be cropped to show only the `/whois` output display without window borders or shadows.

---

*Preserving digital history, one `/whois` at a time.*

