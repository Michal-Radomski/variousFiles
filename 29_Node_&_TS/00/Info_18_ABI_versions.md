### Node.js ABI Versions and Corresponding Node.js Versions

The ABI (Application Binary Interface) version, also known as `NODE_MODULE_VERSION`, is tied to Node.js major versions.
Native addons (e.g., compiled C++ modules) are built against a specific ABI, ensuring compatibility within the same major
version. Below is a comprehensive list of ABI versions and the associated Node.js major version ranges (based on the official
Node.js ABI registry as of November 2025). Each ABI is unique to one major version.

| ABI Version | Node.js Major Version |
| ----------- | --------------------- |
| 11          | 0.10.x                |
| 14          | 0.12.x                |
| 46          | 4.x                   |
| 47          | 5.x                   |
| 48          | 6.x                   |
| 51          | 7.x                   |
| 53          | 8.x                   |
| 57          | 9.x                   |
| 59          | 10.x                  |
| 64          | 11.x                  |
| 67          | 12.x                  |
| 72          | 13.x                  |
| 79          | 14.x                  |
| 83          | 15.x                  |
| 88          | 16.x                  |
| 93          | 17.x                  |
| 102         | 18.x                  |
| 108         | 19.x                  |
| 115         | 20.x                  |
| 121         | 21.x                  |
| 127         | 22.x                  |

**Notes:**

- For Node.js versions prior to 4.x (e.g., 0.10.x, 0.12.x), the ABI is not strictly per major due to historical reasons, but
  the mapping holds.
- Current LTS versions (as of November 2025): Node 20.x (Gallium, ABI 115), 22.x (Iron, ABI 127), and 18.x (Hydrogen,
  ABI 102) in maintenance.
- To check the ABI for a running Node instance, use `process.versions.modules`.
- Source: Official Node.js ABI version registry.
