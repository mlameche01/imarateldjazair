# Architecture rules
- Use the shared LiveHlsPlayer for IPTV HLS playback so stream changes clean up resources and playback failures expose retry and official-site fallback controls.