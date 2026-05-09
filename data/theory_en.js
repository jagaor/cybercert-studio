window.THEORY_EN = [
{
  id:"d1", title:"Domain 1 — General Security Concepts (12%)",
  html:`
<h2>Domain 1 — General Security Concepts</h2>
<div class="lead">The foundation. You learn how controls are classified, the core principles (CIA, AAA, Zero Trust), how change is managed without breaking things, and cryptography in detail.</div>

<h3>1.1 Security control categories and types</h3>
<p>A <b>control</b> is any measure that reduces risk. Each control has a <b>category</b> (its nature) and one or more <b>types</b> (its function).</p>

<h4>Categories</h4>
<div class="minicards">
<div class="minicard"><div class="h"><span class="b">T</span>Technical</div><p>Hardware or software. Firewall, EDR, MFA, encryption.</p></div>
<div class="minicard"><div class="h"><span class="b">M</span>Managerial</div><p>Administrative decisions. Policies, risk assessments, BIA.</p></div>
<div class="minicard"><div class="h"><span class="b">O</span>Operational</div><p>People doing things daily. Reviewing logs, training, IR.</p></div>
<div class="minicard"><div class="h"><span class="b">P</span>Physical</div><p>Protects spaces and hardware. Locks, fences, CCTV.</p></div>
</div>

<h4>Types (function)</h4>
<table>
<tr><th>Type</th><th>What it does</th><th>Real-life example</th></tr>
<tr><td><b>Preventive</b></td><td>Stops the incident before it happens</td><td>Door lock that prevents entry</td></tr>
<tr><td><b>Deterrent</b></td><td>Scares but doesn't block</td><td>"Beware of dog" sign</td></tr>
<tr><td><b>Detective</b></td><td>Tells you something happened</td><td>Home alarm system</td></tr>
<tr><td><b>Corrective</b></td><td>Fixes after damage</td><td>Restoring backup after ransomware</td></tr>
<tr><td><b>Compensating</b></td><td>Plan B when you can't do plan A</td><td>No MFA → IP allowlist + extra logging</td></tr>
<tr><td><b>Directive</b></td><td>Tells you how to behave</td><td>Employee handbook, AUP</td></tr>
</table>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> imagine a jewelry store. <b>Locks on doors</b> = preventive. <b>"Smile, you're on camera" sign</b> = deterrent. <b>Camera recording</b> = detective. <b>Insurance payout after theft</b> = corrective. <b>Hiring a guard because you can't afford bulletproof glass</b> = compensating. <b>Manual telling staff to lock up at 9pm</b> = directive.</div></div>

<div class="callout exam"><span class="ico">★</span><div><b>Exam tip:</b> the same control can wear multiple hats. A <b>visible CCTV camera</b> is <i>physical</i> + <i>deterrent</i> + <i>detective</i>. Always read carefully which dimension the question asks about.</div></div>

<h3>1.2 Fundamental concepts</h3>

<h4>The CIA Triad</h4>
<div class="minicards">
<div class="minicard"><div class="h">C — Confidentiality</div><p>Only authorized see the data. <b>How:</b> encryption, access control.</p></div>
<div class="minicard"><div class="h">I — Integrity</div><p>Data isn't altered without permission. <b>How:</b> hashing, digital signatures, FIM.</p></div>
<div class="minicard"><div class="h">A — Availability</div><p>It's accessible when needed. <b>How:</b> redundancy, backups, anti-DDoS.</p></div>
</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — your bank:</b> <b>Confidentiality</b> = only you can see your balance. <b>Integrity</b> = no one can alter your balance without authorization. <b>Availability</b> = the ATM works at 3am. The opposite trio is <b>DAD</b> — Disclosure (leak), Alteration (tamper), Destruction. That's what an attacker wants.</div></div>

<h4>Other pillars</h4>
<div class="term"><div class="t">Non-repudiation</div>The sender cannot deny having sent the message. Achieved with <b>digital signatures</b>: if it's signed with your private key, only you could have done it.<div class="why"><b>Analogy:</b> like notarizing a contract. The notary's stamp proves you signed it; you can't later say "wasn't me".</div></div>

<div class="term"><div class="t">AAA — Authentication, Authorization, Accounting</div>
<div class="kvs">
<span class="k">Authentication</span><span class="v">Who are you? — username+password, MFA, certificate, biometrics.</span>
<span class="k">Authorization</span><span class="v">What can you do? — roles, permissions, ACLs.</span>
<span class="k">Accounting</span><span class="v">What did you do? — logs, audit trail.</span>
</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — a nightclub:</b> the <b>bouncer checks your ID</b> (authentication). Your <b>VIP wristband</b> decides which rooms you can enter (authorization). The <b>security camera records</b> everything you do (accounting).</div></div></div>

<div class="term"><div class="t">RADIUS vs TACACS+ — AAA protocols</div>
<div class="compare">
<div><h5>RADIUS</h5><p>UDP 1812/1813. Encrypts only the password. Combines authentication and authorization. Open standard, used in Wi-Fi 802.1X and VPNs.</p></div>
<div><h5>TACACS+</h5><p>TCP 49. Encrypts entire payload. Splits AAA into three processes. Cisco proprietary, popular for managing network gear.</p></div>
</div></div>

<div class="term"><div class="t">Gap analysis</div>You compare your <b>current</b> security with the <b>desired</b> (e.g. ISO 27001, NIST CSF). The difference is the "gap" to close.<div class="why"><b>Analogy:</b> like measuring your kid's height against the doorframe and the "you must be this tall to ride" sign. The gap tells you how much growing is left.</div></div>

<h4>Zero Trust — "never trust, always verify"</h4>
<p>Model that assumes the internal network is already compromised. <b>No trusted perimeter</b>. Every request is verified: user, device, context, risk.</p>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> the old way was a <b>medieval castle</b> with a moat and walls — once inside, you walked freely. Zero Trust is an <b>airport</b>: at every gate (security check, boarding, even your seat number) they verify you again.</div></div>

<div class="minicards">
<div class="minicard"><div class="h">Control Plane</div><p><b>Policy Engine (PE)</b> decides. <b>Policy Administrator (PA)</b> enforces the decision. Together = PDP (Policy Decision Point).</p></div>
<div class="minicard"><div class="h">Data Plane</div><p><b>Subject</b> (who asks), <b>PEP</b> (Policy Enforcement Point — who applies it), <b>Resource</b> (what's requested).</p></div>
</div>

<div class="kvs">
<span class="k">Adaptive Identity</span><span class="v">Re-evaluates identity based on context (time, geo, device, risk).</span>
<span class="k">Threat Scope Reduction</span><span class="v">Limits what each identity can touch.</span>
<span class="k">Policy-Driven Access Control</span><span class="v">Decisions by policy, not by network location.</span>
<span class="k">Microsegmentation</span><span class="v">Slicing the network into tiny segments to isolate.</span>
</div>

<h4>Physical security</h4>
<div class="minicards">
<div class="minicard"><div class="h">Bollards</div><p>Concrete/metal posts that block vehicles.</p></div>
<div class="minicard"><div class="h">Fences</div><p>Deter and delay.</p></div>
<div class="minicard"><div class="h">Lighting</div><p>Deterrent + lets CCTV record properly.</p></div>
<div class="minicard"><div class="h">Access vestibule (mantrap)</div><p>Two doors, one person at a time. Stops <b>tailgating</b> (sneaking in behind someone).</p></div>
<div class="minicard"><div class="h">Badges</div><p>RFID/NFC cards with photo. Identify and grant entry.</p></div>
<div class="minicard"><div class="h">CCTV</div><p>Live monitoring + recording for forensics.</p></div>
<div class="minicard"><div class="h">Guards</div><p>Deterrent + human judgment.</p></div>
</div>

<div class="term"><div class="t">Sensors</div>
<div class="kvs">
<span class="k">Infrared (PIR)</span><span class="v">Detects moving heat — your typical alarm sensor.</span>
<span class="k">Pressure</span><span class="v">Mats/floors sensitive to weight.</span>
<span class="k">Microwave</span><span class="v">Emits microwaves and measures reflection; sees through obstacles.</span>
<span class="k">Ultrasonic</span><span class="v">High-frequency sound, detects motion.</span>
</div></div>

<h4>Deception and disruption</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — TFM example:</b> a <b>honeypot</b> is like a fake bank vault with marked bills inside. No legitimate customer would ever touch it, so anyone who does is unmistakably a thief — and you can study how they crack it without risking real money. <b>Honeyfile</b> = a folder labeled "Pension Plans 2026" sitting in a public share. <b>Honeytoken</b> = a fake credit card number planted in your database; if it ever shows up being used, you know exactly which database leaked.</div></div>
<div class="minicards">
<div class="minicard"><div class="h">Honeypot</div><p>An isolated decoy server to attract attackers.</p></div>
<div class="minicard"><div class="h">Honeynet</div><p>An entire network of honeypots simulating production.</p></div>
<div class="minicard"><div class="h">Honeyfile</div><p>Decoy file (e.g. <code>passwords.xlsx</code>); if anyone opens it, alert.</p></div>
<div class="minicard"><div class="h">Honeytoken</div><p><b>Fake</b> credential or API key, monitored. Any use = guaranteed compromise.</p></div>
<div class="minicard"><div class="h">DNS sinkhole</div><p>Redirects queries for malicious domains to a controlled IP to neutralize.</p></div>
</div>

<h3>1.3 Change management</h3>
<p>Poorly managed changes cause more outages and breaches than attacks. The exam tests the <i>process</i>, not the tool.</p>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> changing config on a production server is like <b>doing surgery</b>. You don't just cut: you have a pre-op checklist (impact analysis), an anesthesiologist (CAB approval), tested instruments (test results), a backup plan (backout), a scheduled OR slot (maintenance window), and a step-by-step playbook (SOP).</div></div>

<h4>Business process</h4>
<div class="minicards">
<div class="minicard"><div class="h">Approval</div><p><b>CAB</b> (Change Advisory Board) reviews and approves.</p></div>
<div class="minicard"><div class="h">Ownership</div><p>One person/team responsible.</p></div>
<div class="minicard"><div class="h">Stakeholders</div><p>Anyone affected must be notified.</p></div>
<div class="minicard"><div class="h">Impact analysis</div><p>What breaks if this fails?</p></div>
<div class="minicard"><div class="h">Test results</div><p>Tested in pre-production first.</p></div>
<div class="minicard"><div class="h">Backout plan</div><p>How to roll back if it goes wrong.</p></div>
<div class="minicard"><div class="h">Maintenance window</div><p>Agreed window (e.g. Sunday 3am) to minimize impact.</p></div>
<div class="minicard"><div class="h">SOP</div><p>Standard Operating Procedure: documented steps to follow.</p></div>
</div>

<h4>Technical implications</h4>
<div class="kvs">
<span class="k">Allow / deny lists</span><span class="v">Must update lists when an IP/domain/signature changes.</span>
<span class="k">Restricted activities</span><span class="v">Only certain roles can execute the change.</span>
<span class="k">Downtime</span><span class="v">Communicate and minimize service interruption.</span>
<span class="k">Service / app restarts</span><span class="v">Order and dependencies matter; restarting wrong drops everything.</span>
<span class="k">Legacy applications</span><span class="v">The old app breaks with any touch.</span>
<span class="k">Dependencies</span><span class="v">One change can cascade into 5 more.</span>
</div>

<h3>1.4 Cryptographic solutions</h3>

<h4>PKI — Public Key Infrastructure</h4>
<p>Complete system (CAs, certificates, keys, policies) that lets you use <b>asymmetric cryptography</b> at scale for identity and encryption.</p>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — public vs private key:</b> imagine a <b>special mailbox</b> with two slots. The <b>public key</b> is a slot anyone can drop letters into (encrypt). The <b>private key</b> is the only key that opens the mailbox to read what's inside (decrypt). To <b>sign</b>, you use the private key to put your wax seal on the letter; anyone with your public key can verify the seal is yours.</div></div>

<div class="kvs">
<span class="k">Key escrow</span><span class="v">Depositing a copy of keys with a trusted third party for legal/business recovery.</span>
<span class="k">Recovery agent</span><span class="v">Authorized person/role who can recover from escrow.</span>
</div>

<h4>Encryption levels (what do you encrypt?)</h4>
<div class="minicards">
<div class="minicard"><div class="h">Full-disk (FDE)</div><p>The whole drive. <b>Ex:</b> BitLocker (Win), FileVault (Mac), LUKS (Linux).</p></div>
<div class="minicard"><div class="h">Partition</div><p>Just one specific partition.</p></div>
<div class="minicard"><div class="h">File / folder</div><p>Granular. <b>Ex:</b> EFS on NTFS.</p></div>
<div class="minicard"><div class="h">Volume</div><p>Logical volumes.</p></div>
<div class="minicard"><div class="h">Database</div><p><b>TDE</b> (Transparent Data Encryption): the DB encrypts/decrypts on the fly.</p></div>
<div class="minicard"><div class="h">Record / column</div><p>Field by field (e.g. only the credit card number).</p></div>
</div>

<h4>Symmetric vs asymmetric</h4>
<div class="compare">
<div><h5>Symmetric</h5><p>One shared key. <b>Fast</b> (encrypts gigabytes effortlessly).<br><b>Algorithms:</b> AES (128/192/256), 3DES (legacy), ChaCha20, Blowfish, Twofish, RC4 (broken).<br><b>Problem:</b> how do you exchange the key securely?</p></div>
<div><h5>Asymmetric</h5><p>Public/private key pair. <b>Slow</b> (~1000× slower).<br><b>Algorithms:</b> RSA (2048+), ECC, ECDSA, DSA, Diffie-Hellman.<br><b>Use:</b> session key exchange, signatures, authentication.</p></div>
</div>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — symmetric vs asymmetric:</b> symmetric is a <b>house key</b> — one key opens and locks. The challenge is mailing it to your friend without anyone copying it. Asymmetric is a <b>padlock with two keys</b>: a "lock-only" key (public) that anyone can use to lock a box, and a "open-only" key (private) that only you have to open it. You publish the lock-only key in the phone book.</div></div>

<div class="callout tip"><span class="ico">▲</span><div><b>Hybrid encryption (TLS, PGP):</b> uses <b>asymmetric</b> to agree on a symmetric session key → the rest of the traffic flows symmetric (fast). Best of both worlds. <b>Analogy:</b> you use the slow padlock once to securely send a copy of the house key, then both use the house key for everything after.</div></div>

<h4>Block cipher modes (how the cipher is applied)</h4>
<div class="kvs">
<span class="k">ECB</span><span class="v">Electronic Code Book. Each block separately. <b>Insecure</b>: reveals patterns.</span>
<span class="k">CBC</span><span class="v">Cipher Block Chaining. Chains blocks via XOR. Needs an IV.</span>
<span class="k">CTR</span><span class="v">Counter mode. Turns a block cipher into a stream cipher.</span>
<span class="k">GCM</span><span class="v">Galois Counter Mode. Encrypts <b>+ authenticates</b> (AEAD). Modern standard (TLS 1.3).</span>
</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — ECB vs CBC:</b> ECB is encrypting each page of a book separately. If two pages had identical text, the ciphertext is identical too — patterns leak. CBC mixes each page with the previous one's ciphertext, so identical inputs become unrecognizable.</div></div>

<h4>Key exchange</h4>
<div class="term"><div class="t">Diffie-Hellman (DH)</div>Lets two parties agree on a shared key <b>over an insecure channel</b> without ever transmitting it. <b>Math magic</b>: even if someone hears the whole exchange, they can't derive the key.<div class="why"><b>Analogy:</b> two strangers in public choose a paint color secret without saying it. Each mixes their secret with a public color and shares the mix. They both end up with the same final mix; no eavesdropper can recreate it.<br><b>DHE / ECDHE</b> (ephemeral) generates a new key per session → <b>Perfect Forward Secrecy (PFS)</b>: if your long-term key is stolen, past sessions remain secure.</div></div>

<h4>Hardware tools</h4>
<div class="minicards">
<div class="minicard"><div class="h">TPM</div><p><b>Trusted Platform Module</b>: chip soldered to the motherboard. Stores device keys, does attestation, supports Secure Boot and BitLocker. <b>Analogy:</b> built-in safe in your computer's wall.</p></div>
<div class="minicard"><div class="h">HSM</div><p><b>Hardware Security Module</b>: dedicated appliance (PCIe or network). FIPS 140-2/3. For high volume. Keys <b>never</b> leave the HSM. <b>Analogy:</b> bank vault dedicated to high-value items.</p></div>
<div class="minicard"><div class="h">KMS</div><p><b>Key Management Service</b>: service (mostly cloud) that manages key lifecycle. Ex: AWS KMS, Azure Key Vault.</p></div>
<div class="minicard"><div class="h">Secure Enclave / TEE</div><p>Isolated zone inside the CPU. <b>Ex:</b> Apple Secure Enclave, Intel SGX, ARM TrustZone. Protects data <b>in use</b>.</p></div>
</div>

<h4>Obfuscation (hiding data)</h4>
<div class="minicards">
<div class="minicard"><div class="h">Steganography</div><p>Hide a message inside an image/audio/video. <b>Doesn't encrypt</b>: hides existence.</p></div>
<div class="minicard"><div class="h">Tokenization</div><p>Replace sensitive data with a <b>token</b> with no mathematical value. Mapping in a vault. Heavily used in <b>PCI DSS</b>.</p></div>
<div class="minicard"><div class="h">Data masking</div><p>Partial replacement: <code>XXXX-XXXX-XXXX-1234</code>. For tests and display.</p></div>
</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — tokenization:</b> like a <b>coat-check ticket</b>. You give your real coat, get a numbered ticket. Anyone who steals the ticket can't recreate your coat from it. The mapping is in the cloakroom (vault).</div></div>

<h4>Hashing (one-way fingerprint)</h4>
<p>Mathematical function: input → fixed-size digest. <b>Not reversible</b>. Any tiny change in input completely changes the hash (avalanche effect).</p>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> a <b>blender</b>. You drop fruits in and get a smoothie. You can compare two smoothies (same input → same smoothie), but you can't reconstruct the fruits from the smoothie.</div></div>
<table>
<tr><th>Algorithm</th><th>Output</th><th>Status</th></tr>
<tr><td>MD5</td><td>128 bit</td><td>Broken (practical collisions)</td></tr>
<tr><td>SHA-1</td><td>160 bit</td><td>Deprecated</td></tr>
<tr><td>SHA-2 (256/384/512)</td><td>256-512 bit</td><td>✓ Current</td></tr>
<tr><td>SHA-3</td><td>variable</td><td>✓ Different design, current</td></tr>
<tr><td>HMAC</td><td>variable</td><td>Hash + key for integrity+authentication</td></tr>
</table>

<div class="term"><div class="t">Salt</div>Random unique value per user added to the password <b>before</b> hashing.<div class="why"><b>Analogy:</b> like adding a random ingredient to your cake batter so no two cakes taste identical even if the recipe is the same. Two users with the same password get different hashes, and pre-computed <b>rainbow tables</b> become useless.</div></div>

<div class="term"><div class="t">Key stretching / KDFs</div>Hash functions <b>deliberately slow</b> and memory-expensive. Goal: make brute-forcing millions of passwords infeasible.
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> a <b>combination safe that takes 5 minutes to open even with the right code</b>. For you, opening once is fine. For an attacker trying 10 million combos, 5 min × 10M = unfeasible.</div></div>
<div class="kvs">
<span class="k">PBKDF2</span><span class="v">SHA iterations. Acceptable.</span>
<span class="k">bcrypt</span><span class="v">Based on Blowfish, configurable cost factor.</span>
<span class="k">scrypt</span><span class="v">Memory-hard: needs lots of RAM, resists GPUs/ASICs.</span>
<span class="k">Argon2</span><span class="v">★ Current recommendation (PHC 2015 winner). Variants Argon2i/d/id.</span>
</div></div>

<h4>Digital signature — step by step</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> like <b>sealing a letter with your personal wax stamp</b>. Anyone who has a copy of your stamp design (public key) can verify the seal is yours. Only you have the stamp itself (private key) to make it.</div></div>
<div class="flow">
<span class="step">1. Hash the message</span><span class="arr">→</span>
<span class="step">2. Encrypt the hash with your private key</span><span class="arr">→</span>
<span class="step">3. Send message + signature</span>
</div>
<div class="flow">
<span class="step">Receiver: hashes the message</span><span class="arr">→</span>
<span class="step">Decrypts signature with your public</span><span class="arr">→</span>
<span class="step">Compares hashes</span>
</div>
<p><b>If they match:</b> integrity ✓, authentication ✓ (only you had the private key), non-repudiation ✓.</p>

<h4>Blockchain</h4>
<p>Distributed <b>immutable</b> ledger. Each block includes the previous block's hash → modifying one requires recomputing all. <b>Applications:</b> cryptocurrencies, smart contracts, supply chain integrity, medical records.</p>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> like a <b>chain of dominoes glued together</b>. To remove or alter one domino in the middle, you'd have to rebuild every domino after it — and there are millions of identical chains held by other people, so they'd notice immediately.</div></div>

<h4>Digital certificates (X.509)</h4>
<p>Bind an <b>identity</b> to a <b>public key</b>, signed by a trusted <b>CA</b>. The digital equivalent of a passport issued by an authority.</p>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> a certificate is a <b>government-issued ID</b>. The CA is the <b>government office</b> that issues it. Your browser already trusts certain governments (root CAs) and accepts any ID they issued.</div></div>

<div class="minicards">
<div class="minicard"><div class="h">CA — Certificate Authority</div><p>Who issues and signs certificates. The <b>Root CA</b> is usually offline; <b>intermediate CAs</b> issue to end users.</p></div>
<div class="minicard"><div class="h">RA — Registration Authority</div><p>Verifies identity before the CA issues.</p></div>
<div class="minicard"><div class="h">CSR</div><p><b>Certificate Signing Request</b>: request you generate with your public key and info; you send it to the CA.</p></div>
<div class="minicard"><div class="h">CRL</div><p><b>Certificate Revocation List</b>: downloadable list of revoked certificates, published periodically. <b>Analogy:</b> printed list of stolen credit cards mailed to merchants.</p></div>
<div class="minicard"><div class="h">OCSP</div><p><b>Online Certificate Status Protocol</b>: on-demand status check. <b>Analogy:</b> calling the bank to verify a card right now. <b>OCSP stapling</b>: server attaches the signed response to the TLS handshake.</p></div>
<div class="minicard"><div class="h">SAN</div><p><b>Subject Alternative Name</b>: multiple names/domains in one cert (web.com, www.web.com, api.web.com).</p></div>
<div class="minicard"><div class="h">Wildcard</div><p>Valid for any subdomain: <code>*.domain.com</code>.</p></div>
<div class="minicard"><div class="h">Self-signed</div><p>Signed by oneself. No public chain of trust. OK for test/lab or your own root CA.</p></div>
<div class="minicard"><div class="h">Root of trust</div><p>CA whose signatures are accepted implicitly. Pre-installed in browsers and OS.</p></div>
</div>

<div class="kvs">
<span class="k">DV validation</span><span class="v">Domain Validated — only confirm you control the domain.</span>
<span class="k">OV validation</span><span class="v">Organization Validated — verify the organization.</span>
<span class="k">EV validation</span><span class="v">Extended Validation — deep audit. Used to give the green bar.</span>
</div>

<div class="kvs">
<span class="k">PEM</span><span class="v">Base64 with <code>-----BEGIN-----</code> headers. Extensions .pem .crt .cer.</span>
<span class="k">DER</span><span class="v">Binary, no text headers.</span>
<span class="k">PKCS#12 / .pfx</span><span class="v">Cert + private key encrypted with password.</span>
<span class="k">PKCS#7 / .p7b</span><span class="v">Only certs (no private key).</span>
</div>
`},

{
  id:"d2", title:"Domain 2 — Threats, Vulnerabilities & Mitigations (22%)",
  html:`
<h2>Domain 2 — Threats, Vulnerabilities and Mitigations</h2>
<div class="lead">The biggest domain. You learn <b>who attacks</b> (actors), <b>how they get in</b> (vectors), <b>what flaws they exploit</b> (vulnerabilities), <b>how you spot it</b> (indicators) and <b>how you stop it</b> (mitigations).</div>

<h3>2.1 Threat actors</h3>

<h4>Who attacks and why?</h4>
<table>
<tr><th>Actor</th><th>Who they are</th><th>Resources</th><th>Typical motivation</th></tr>
<tr><td><b>Nation-state / APT</b></td><td>States or agencies. Stealthy, persistent. <b>APT</b> = Advanced Persistent Threat.</td><td>Very high</td><td>Espionage, sabotage, geopolitics, cyber warfare</td></tr>
<tr><td><b>Organized crime</b></td><td>Professional groups, digital mafia.</td><td>High</td><td>Profit: ransomware, fraud, data theft for resale</td></tr>
<tr><td><b>Hacktivist</b></td><td>Activists with a cause.</td><td>Medium</td><td>Ideology, politics, ethics. Defacements, leaks, DDoS</td></tr>
<tr><td><b>Insider threat</b></td><td>Employee or contractor (current or former).</td><td>Variable; already inside</td><td>Revenge, profit, negligence</td></tr>
<tr><td><b>Unskilled / Script kiddie</b></td><td>No skills, uses ready-made tools.</td><td>Low</td><td>Curiosity, notoriety</td></tr>
<tr><td><b>Shadow IT</b></td><td>Employees using unapproved tech (Dropbox, ChatGPT...).</td><td>—</td><td>Not hostile, but creates risk</td></tr>
<tr><td><b>Competitors</b></td><td>Rival company.</td><td>Variable</td><td>Industrial espionage</td></tr>
</table>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> imagine your house. <b>APT</b> = a foreign intelligence team that watches your routine for months. <b>Organized crime</b> = professional burglars looking for cash. <b>Hacktivist</b> = protester spray-painting your door for a cause. <b>Insider</b> = your former roommate who still has a key. <b>Script kiddie</b> = a teen trying random doorknobs to see what opens.</div></div>

<h4>Motivations</h4>
<p>Data exfiltration · espionage · blackmail · service (RaaS, "attack-for-hire") · financial gain · philosophical/political beliefs · ethics · revenge · disruption/chaos · war.</p>

<h3>2.2 Attack vectors and surface</h3>

<div class="callout info"><span class="ico">ⓘ</span><div><b>Vector</b> = the path the attacker uses to get in. <b>Attack surface</b> = the sum of all exposed points.</div></div>

<h4>Message-based vectors</h4>
<div class="minicards">
<div class="minicard"><div class="h">Email</div><p>The #1 vector. Phishing, spear phishing, BEC.</p></div>
<div class="minicard"><div class="h">SMS</div><p>Smishing — phishing by text.</p></div>
<div class="minicard"><div class="h">Voice</div><p>Vishing — fake "tech support" call.</p></div>
<div class="minicard"><div class="h">IM</div><p>Teams, Slack, WhatsApp — increasingly used as vectors.</p></div>
</div>

<h4>Other vectors</h4>
<div class="kvs">
<span class="k">Images / files</span><span class="v">Steganography, macros (Word/Excel), executables disguised as documents.</span>
<span class="k">Removable devices</span><span class="v">USB drops (leave a USB in the parking lot), <b>BadUSB</b> (a USB that pretends to be a keyboard), malicious cables like the O.MG cable.</span>
<span class="k">Vulnerable software</span><span class="v">Client (browser, PDF reader) or corporate agents (RMM, antivirus).</span>
<span class="k">EOL systems</span><span class="v">End-of-Life: no vendor patches.</span>
<span class="k">Insecure ports / protocols</span><span class="v">Telnet 23, FTP 21, SMBv1, SNMPv1/v2c.</span>
<span class="k">Default credentials</span><span class="v">admin/admin on routers, IoT, panels.</span>
<span class="k">Open service ports</span><span class="v">Open ports without need — surface served on a plate.</span>
<span class="k">Supply chain</span><span class="v">Compromised MSP, hardware with backdoors, software dependencies (npm, PyPI).</span>
</div>

<h4>Social engineering (human manipulation)</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> social engineering is <b>con artistry</b>. The attacker exploits human shortcuts (trust, authority, fear) instead of technical flaws. Same as the classic con: "Hi, I'm from the gas company, gotta check your meter".</div></div>
<table>
<tr><th>Technique</th><th>What it is</th></tr>
<tr><td>Phishing</td><td>Mass email with bait (link/malicious attachment).</td></tr>
<tr><td>Spear phishing</td><td>Targeted, personalized phishing.</td></tr>
<tr><td>Whaling</td><td>Spear phishing aimed at "big fish" (CEO, CFO).</td></tr>
<tr><td>Vishing</td><td>Voice/phone. "I'm from the bank, I need your PIN".</td></tr>
<tr><td>Smishing</td><td>SMS. "Your package is held, pay here".</td></tr>
<tr><td>BEC</td><td><b>Business Email Compromise</b>: impersonate CEO/vendor for financial fraud.</td></tr>
<tr><td>Pretexting</td><td>Invent a believable pretext (auditor, technician).</td></tr>
<tr><td>Watering hole</td><td>Compromise a website the victim visits regularly. <b>Analogy:</b> like poisoning the watering hole where the herd drinks.</td></tr>
<tr><td>Brand impersonation</td><td>Impersonate known brands (DHL, Microsoft, bank).</td></tr>
<tr><td>Typosquatting</td><td>Lookalike domains: <code>amaz0n.com</code>, <code>microsft.com</code>.</td></tr>
<tr><td>Tailgating / Piggybacking</td><td>Sneak in physically behind someone authorized.</td></tr>
<tr><td>Shoulder surfing</td><td>Look over shoulder while typing.</td></tr>
<tr><td>Dumpster diving</td><td>Search the trash for sensitive info.</td></tr>
<tr><td>MFA fatigue / push bombing</td><td>Spam MFA prompts until the user accepts out of exhaustion.</td></tr>
</table>

<div class="callout exam"><span class="ico">★</span><div><b>Cialdini influence principles:</b> authority, intimidation, consensus, scarcity, urgency, familiarity, trust. The exam asks which is being used in a scenario.</div></div>

<h3>2.3 Vulnerability types</h3>

<h4>Application</h4>
<div class="term"><div class="t">Memory injection</div>The attacker injects code into a legitimate process's memory space. Runs as the original process → evades AV.<div class="why"><b>Analogy:</b> like ventriloquism — the attacker's voice comes out of the dummy's mouth.</div></div>

<div class="term"><div class="t">Buffer overflow</div>Writing more data than the buffer holds → overwrites adjacent memory. Allows arbitrary code execution.<div class="why"><b>Analogy:</b> pouring water into a cup until it floods the table and short-circuits the laptop next to it.<br><b>Mitigations:</b> ASLR (randomizes addresses), DEP/NX (non-executable memory), stack canaries (sentinel detects overwrite), memory-safe languages (Rust, Go).</div></div>

<div class="term"><div class="t">Race condition (TOCTOU)</div><b>Time-Of-Check Time-Of-Use</b>. There's a tiny window between verifying something and using it; the attacker swaps state in that gap.<div class="why"><b>Analogy:</b> two kids reaching for the last cookie at the exact same moment. Whoever's faster gets it. <b>Example:</b> the system checks a file is safe, and just before reading it the attacker swaps it for a malicious one.</div></div>

<div class="term"><div class="t">Malicious update</div>A legitimate update arrives compromised (SolarWinds), or attacker plays fake updater.</div>

<h4>OS-based</h4>
<p>Kernel exploits, vulnerable drivers, missing patches. Allow <b>privilege escalation</b> (going from regular user to admin/root).</p>

<h4>Web-based</h4>
<div class="term"><div class="t">SQLi — SQL Injection</div>You inject SQL into an unvalidated input.<div class="why"><b>Analogy:</b> handing the librarian a request slip with extra instructions written on the back: "...and also bring me every book from the secret room". <br><b>Example:</b> on a login with <code>SELECT * WHERE user='X' AND pass='Y'</code> you input <code>' OR '1'='1</code> → always true. <b>Mitigation:</b> prepared statements / parameterized queries.</div></div>

<div class="term"><div class="t">XSS — Cross-Site Scripting</div>You inject <code>&lt;script&gt;</code> that runs in other users' browsers.<div class="why"><b>Analogy:</b> taking over the airport PA system to announce fake instructions to other travelers.</div>
<div class="kvs">
<span class="k">Reflected</span><span class="v">Payload in URL/parameter; executes on load.</span>
<span class="k">Stored</span><span class="v">Persists in DB/comments; affects all visitors.</span>
<span class="k">DOM-based</span><span class="v">DOM manipulation in client without touching server.</span>
</div>
<div class="why"><b>Mitigations:</b> output encoding, Content Security Policy (CSP), sanitization, HttpOnly cookies.</div></div>

<div class="term"><div class="t">CSRF — Cross-Site Request Forgery</div>You exploit the user's authenticated session to make their browser send a request without their knowledge.<div class="why"><b>Analogy:</b> someone forges a check using a signed blank check you left on your desk. <b>Example:</b> user logged into bank opens a malicious page that triggers a transfer. <b>Mitigation:</b> anti-CSRF tokens, SameSite cookies, Referer check.</div></div>

<div class="term"><div class="t">Directory traversal</div>Jumping outside the allowed directory: <code>../../etc/passwd</code>.<div class="why"><b>Analogy:</b> in a hotel, asking the bellhop to bring something from "two floors below the basement".</div></div>

<div class="term"><div class="t">SSRF — Server-Side Request Forgery</div>You force the server to make requests to internal resources on your behalf. Lets you reach private APIs or cloud metadata.</div>

<h4>Hardware</h4>
<div class="kvs">
<span class="k">Firmware</span><span class="v">Low-level vulnerabilities (UEFI/BIOS rootkits, persist across OS reinstalls).</span>
<span class="k">EOL / End-of-Life</span><span class="v">No vendor updates. Risk grows over time.</span>
<span class="k">End of service life</span><span class="v">No support nor patches.</span>
</div>

<h4>Virtualization</h4>
<div class="minicards">
<div class="minicard"><div class="h">VM escape</div><p>Breaking VM isolation to reach the hypervisor or host. Critical.</p></div>
<div class="minicard"><div class="h">Resource reuse</div><p>You're assigned memory/disk that still had the previous customer's data.</p></div>
<div class="minicard"><div class="h">VM sprawl</div><p>Uncontrolled VM proliferation without management or patching.</p></div>
</div>

<h4>Cloud</h4>
<p>Misconfigurations (public S3 buckets, permissive IAM, credentials in repos), shadow APIs, hardcoded secrets.</p>

<h4>Supply chain</h4>
<p>Service provider, hardware provider, software provider. <b>Famous cases:</b> SolarWinds, Log4j, compromised npm dependencies.</p>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> someone poisons the city's water supply at the source — every household downstream is hit.</div></div>

<h4>Cryptographic</h4>
<p>Weak algorithm (DES, MD5, SHA-1, RC4), short key, bad randomness, IV/nonce reuse, buggy implementations (Heartbleed, POODLE).</p>

<h4>Misconfiguration</h4>
<p>Default passwords, unnecessary services, excessive permissions, disabled logging, debug exposed in production.</p>

<h4>Mobile</h4>
<div class="kvs">
<span class="k">Sideloading</span><span class="v">Installing apps outside the official store — no verification.</span>
<span class="k">Jailbreaking / Rooting</span><span class="v">Bypassing manufacturer restrictions. Breaks the security model.</span>
</div>

<h4>Zero-day</h4>
<p>Vulnerability <b>unknown to the vendor</b>, no patch. Sold in dark markets and government brokers for big money.<br><b>Analogy:</b> a disease nobody has discovered yet, no vaccine exists.<br><b>Defense:</b> defense in depth, EDR/XDR, segmentation, behavioral detection (not signature).</p>

<h3>2.4 Indicators of malicious activity (IoC)</h3>

<h4>Malware families</h4>
<table>
<tr><th>Type</th><th>Behavior</th></tr>
<tr><td>Virus</td><td>Needs a host file and user action to spread.</td></tr>
<tr><td>Worm</td><td>Auto-replicates over network without host or human interaction. <b>Analogy:</b> a flu spreading person to person without anyone touching.</td></tr>
<tr><td>Trojan</td><td>Apparently legit software with a hidden malicious payload. <b>Analogy:</b> the wooden horse from Greek mythology.</td></tr>
<tr><td>RAT</td><td><b>Remote Access Trojan</b>: remote control of the compromised host.</td></tr>
<tr><td>Ransomware</td><td>Encrypts files and demands ransom. Modern model: <b>double extortion</b> (leak data + encrypt). <b>Analogy:</b> kidnappers locking your files, demanding payment.</td></tr>
<tr><td>Spyware</td><td>Spies: browsing, credentials, screenshots.</td></tr>
<tr><td>Keylogger</td><td>Captures keystrokes. Hardware (in USB cable) or software.</td></tr>
<tr><td>Rootkit</td><td>Hides presence, operates in kernel/firmware. Hard to detect. <b>Analogy:</b> a mole hidden inside the police station.</td></tr>
<tr><td>Bootkit</td><td>Rootkit in MBR/UEFI. Persists before the OS boots.</td></tr>
<tr><td>Logic bomb</td><td>Code triggered when a condition is met (date, event). <b>Analogy:</b> a time bomb ticking to a specific date.</td></tr>
<tr><td>Bloatware</td><td>Pre-installed unnecessary software. Adds surface without benefit.</td></tr>
<tr><td>Cryptominer</td><td>Mines crypto by hijacking CPU/GPU. <b>Symptom:</b> high usage and fans full blast.</td></tr>
<tr><td>Fileless malware</td><td>Lives in memory; doesn't touch disk. Uses PowerShell, WMI. Evades file-based AV.</td></tr>
<tr><td>Botnet</td><td>Network of compromised hosts controlled by a C2 server. <b>Analogy:</b> an army of zombies obeying a remote master.</td></tr>
<tr><td>PUP</td><td><b>Potentially Unwanted Program</b>: adware, toolbars, annoying software.</td></tr>
</table>

<h4>Physical attacks</h4>
<div class="kvs">
<span class="k">Physical brute force</span><span class="v">Forcing a lock, smashing a window.</span>
<span class="k">RFID cloning</span><span class="v">Copying proximity cards with devices like Flipper Zero.</span>
<span class="k">Environmental</span><span class="v">Tamper with HVAC to damage hardware, or apply dry ice to SSD to force unencrypted reads.</span>
</div>

<h4>Network attacks</h4>
<div class="term"><div class="t">DDoS</div><b>Distributed Denial of Service</b>: many hosts attacking at once to take down a service. <b>Analogy:</b> a mob blocking the only door of a store so real customers can't enter.
<div class="kvs">
<span class="k">Volumetric</span><span class="v">Saturate bandwidth.</span>
<span class="k">Protocol</span><span class="v">Exhaust resources (SYN flood).</span>
<span class="k">Layer 7</span><span class="v">Against the app (expensive HTTP requests).</span>
<span class="k">Reflection</span><span class="v">Spoof source IP; responses flood the victim.</span>
<span class="k">Amplification</span><span class="v">Use protocols where the response is much larger than the request (DNS, NTP, Memcached).</span>
</div></div>

<div class="term"><div class="t">DNS attacks</div>
<div class="kvs">
<span class="k">DNS poisoning</span><span class="v">Poison DNS cache to redirect traffic. Mitigation: <b>DNSSEC</b>.</span>
<span class="k">DNS hijacking</span><span class="v">Alter the domain's actual DNS records.</span>
<span class="k">Domain hijacking</span><span class="v">Steal the entire domain (social engineering on the registrar).</span>
</div></div>

<div class="term"><div class="t">Spoofing</div>Impersonate identity: IP, MAC, ARP, email. Foundation of many other attacks. <b>Analogy:</b> caller ID showing your bank's number when actually it's a scammer.</div>

<div class="term"><div class="t">On-path attack (formerly MITM)</div>You insert yourself <b>in between</b> two parties' communication; you can read and modify.<div class="why"><b>Analogy:</b> a fake mailman intercepting and resealing letters between two friends. <b>Defense:</b> end-to-end encryption, certificate pinning, HSTS.</div></div>

<div class="term"><div class="t">Replay attack</div>Capture valid credentials/tokens and resend them later.<div class="why"><b>Analogy:</b> recording the beep of someone's keycard and replaying it at the door. <b>Defenses:</b> nonces, timestamps, one-time tokens, short sessions, MFA.</div></div>

<div class="term"><div class="t">Wireless attacks</div>
<div class="kvs">
<span class="k">Deauth</span><span class="v">Send disconnection packets to kick users off Wi-Fi.</span>
<span class="k">Evil twin</span><span class="v">Malicious twin AP with the same SSID as the corporate one.</span>
<span class="k">KRACK</span><span class="v">Historic vulnerability of WPA2.</span>
<span class="k">Bluejacking</span><span class="v">Unsolicited Bluetooth message.</span>
<span class="k">Bluesnarfing</span><span class="v">Stealing data over Bluetooth.</span>
<span class="k">Bluebugging</span><span class="v">Remote control over Bluetooth.</span>
</div></div>

<h4>Application attacks</h4>
<p>Injection (SQL, LDAP, command, XPath), buffer overflow, replay, privilege escalation, forgery (request, session), directory traversal, XSS, CSRF.</p>

<h4>Cryptographic attacks</h4>
<div class="kvs">
<span class="k">Downgrade</span><span class="v">Force a weak version. <b>POODLE</b> on SSLv3, <b>FREAK</b> on TLS.</span>
<span class="k">Collision</span><span class="v">Find two inputs with the same hash. Broken in MD5/SHA-1.</span>
<span class="k">Birthday attack</span><span class="v">Uses the birthday paradox to reduce collision effort.</span>
<span class="k">Brute force</span><span class="v">Try the entire key space.</span>
<span class="k">Side-channel</span><span class="v">Measure power, time, EMI to derive keys.</span>
</div>

<h4>Password attacks</h4>
<div class="minicards">
<div class="minicard"><div class="h">Brute force</div><p>Try all combinations.</p></div>
<div class="minicard"><div class="h">Dictionary</div><p>List of probable words.</p></div>
<div class="minicard"><div class="h">Spray</div><p>Few common passwords (Summer2024!) against <b>many</b> accounts. Avoids lockouts.</p></div>
<div class="minicard"><div class="h">Rainbow table</div><p>Pre-computed hash↔password tables. Salt nullifies them.</p></div>
<div class="minicard"><div class="h">Hybrid</div><p>Dictionary + mutations (Password1!, Password2024).</p></div>
</div>

<h4>Typical indicators (what you see when something's wrong)</h4>
<div class="callout warn"><span class="ico">⚠</span><div>These are the <b>IoCs</b> (Indicators of Compromise) the exam will mention in scenarios. Your job: recognize them.</div></div>
<div class="kvs">
<span class="k">Account lockouts</span><span class="v">Unusual number of locked accounts → possible spray/brute.</span>
<span class="k">Concurrent session usage</span><span class="v">Same account logged in from two places at once.</span>
<span class="k">Impossible travel</span><span class="v">Login in Madrid then 5 min later in Tokyo. Physically impossible.</span>
<span class="k">Resource consumption</span><span class="v">CPU/network spike with no cause → cryptominer, exfiltration.</span>
<span class="k">Resource inaccessibility</span><span class="v">Encrypted files, services down → ransomware.</span>
<span class="k">Out-of-cycle logging</span><span class="v">Activity outside usual hours.</span>
<span class="k">Missing / blank logs</span><span class="v">Empty logs during a window → tampering.</span>
<span class="k">Published indicators</span><span class="v">Threat intel matches what you see.</span>
</div>

<h3>2.5 Mitigation techniques</h3>

<h4>General mitigations</h4>
<div class="minicards">
<div class="minicard"><div class="h">Segmentation</div><p>Slice the network into VLANs/subnets so a compromise doesn't spread. <b>Analogy:</b> watertight bulkheads on a ship.</p></div>
<div class="minicard"><div class="h">Access control</div><p>ACLs, permissions, <b>least privilege</b> (minimum needed), separation of duties.</p></div>
<div class="minicard"><div class="h">Application allow list</div><p>Only signed/approved binaries run. <b>Ex:</b> AppLocker, WDAC. <b>Analogy:</b> club guest list.</p></div>
<div class="minicard"><div class="h">Isolation</div><p>Sandboxing, containers, chroot jails. <b>Analogy:</b> bomb squad opening a package in a shielded room.</p></div>
<div class="minicard"><div class="h">Patching</div><p>Ordered pipeline: test → ring deployment → rollback plan. <b>Analogy:</b> filling potholes.</p></div>
<div class="minicard"><div class="h">Encryption</div><p>At rest, in transit, in use.</p></div>
<div class="minicard"><div class="h">Monitoring</div><p>SIEM, EDR, UEBA (User Entity Behavior Analytics).</p></div>
<div class="minicard"><div class="h">Configuration enforcement</div><p>Force approved configs with GPO, MDM, IaC, CIS Benchmarks.</p></div>
<div class="minicard"><div class="h">Decommissioning</div><p>Sanitize and retire EOL assets.</p></div>
</div>

<h4>Hardening (toughening a system)</h4>
<div class="callout info"><span class="ico">ⓘ</span><div><b>Hardening</b> = reducing the attack surface by removing the unnecessary and applying secure configs. The opposite of "install and leave at defaults".<br><b>Analogy:</b> stripping all valuables out of a car you park overnight in a sketchy area.</div></div>
<div class="kvs">
<span class="k">Encryption by default</span><span class="v">Disk, communications, backups.</span>
<span class="k">Install EDR</span><span class="v">Endpoint Detection and Response: detect and respond on endpoints.</span>
<span class="k">Host-based firewall</span><span class="v">Firewall on the device itself (Windows Defender Firewall, ufw).</span>
<span class="k">HIPS</span><span class="v"><b>Host-based Intrusion Prevention System</b>: like an IPS but on the host. Blocks suspicious actions (DLL injection, escalation, persistence).</span>
<span class="k">Disable ports / protocols</span><span class="v">Close what you don't use: if you don't need SMB, turn it off. Every open port is a potential door.</span>
<span class="k">Change default passwords</span><span class="v">Routers, switches, IoT, admin panels ship with admin/admin.</span>
<span class="k">Remove unnecessary software</span><span class="v">Bloatware, demos, pre-installed software you don't use. Each program = potential vulnerabilities.</span>
</div>
`},

{
  id:"d3", title:"Domain 3 — Security Architecture (18%)",
  html:`
<h2>Domain 3 — Security Architecture</h2>
<div class="lead">How infrastructure is designed securely. Cloud models, network segmentation, protecting data in its three states, high availability and recovery.</div>

<h3>3.1 Security implications of architectural models</h3>

<h4>Cloud — service models</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Pizza analogy:</b> <b>On-prem</b> = make pizza at home (everything you). <b>IaaS</b> = order dough and cheese (they give ingredients, you cook). <b>PaaS</b> = order frozen pizza (just put in oven). <b>SaaS</b> = go to the pizzeria (served ready).</div></div>

<table>
<tr><th>Layer</th><th>On-prem</th><th>IaaS</th><th>PaaS</th><th>SaaS</th></tr>
<tr><td>App / data</td><td>Customer</td><td>Customer</td><td>Customer</td><td>Customer (config)</td></tr>
<tr><td>Runtime / middleware</td><td>Customer</td><td>Customer</td><td>Provider</td><td>Provider</td></tr>
<tr><td>Operating system</td><td>Customer</td><td>Customer</td><td>Provider</td><td>Provider</td></tr>
<tr><td>Virt. / HW / Network / Physical</td><td>Customer</td><td>Provider</td><td>Provider</td><td>Provider</td></tr>
</table>

<h4>Cloud deployment models</h4>
<div class="kvs">
<span class="k">Public</span><span class="v">Provider gives you shared resources on their infra (AWS, Azure, GCP).</span>
<span class="k">Private</span><span class="v">Cloud dedicated to your organization.</span>
<span class="k">Hybrid</span><span class="v">Mix of public and private or on-prem.</span>
<span class="k">Community</span><span class="v">Shared between orgs with common interests (e.g. universities).</span>
</div>

<div class="term"><div class="t">Third-party vendors</div>
<div class="kvs">
<span class="k">MSP</span><span class="v"><b>Managed Service Provider</b>: manages your IT.</span>
<span class="k">MSSP</span><span class="v"><b>Managed Security Service Provider</b>: manages security (SOC, EDR).</span>
</div></div>

<h4>Other models</h4>
<div class="term"><div class="t">IaC — Infrastructure as Code</div>You define infrastructure in versionable files. <b>Ex:</b> Terraform, CloudFormation, Pulumi.<div class="why"><b>Analogy:</b> instead of building each Lego model by hand each time, you have the instruction booklet — anyone can rebuild the exact same model. <b>Benefits:</b> repeatability, peer review, no "configuration drift", scannable with tools (Checkov, tfsec).</div></div>

<div class="term"><div class="t">Serverless</div>Provider manages servers; you upload functions (AWS Lambda, Azure Functions).<div class="why"><b>Analogy:</b> using Uber instead of owning a car. <b>Pros:</b> less surface, pay per use. <b>Cons:</b> vendor dependency, cold starts, different monitoring.</div></div>

<div class="term"><div class="t">Microservices</div>Apps split into many small services talking through APIs.<div class="why"><b>Analogy:</b> a restaurant with specialized stations (grill, sushi, desserts) instead of one chef doing everything. <b>Pros:</b> scale and deploy independently. <b>Cons:</b> more surface, need service-to-service auth (mTLS, service mesh).</div></div>

<h4>Network infrastructure</h4>
<div class="kvs">
<span class="k">Physical vs SDN</span><span class="v"><b>Software-Defined Networking</b>: separates control and data plane; centralized policies.</span>
<span class="k">Centralized vs decentralized</span><span class="v">Trade-off between control and resilience.</span>
<span class="k">Containerization</span><span class="v">Docker, podman. Share kernel; less isolation than VMs but boot in seconds.</span>
<span class="k">Type 1 hypervisor</span><span class="v">Bare-metal: ESXi, Hyper-V, KVM, Xen. Hypervisor on hardware.</span>
<span class="k">Type 2 hypervisor</span><span class="v">Hosted: VMware Workstation, VirtualBox. Hypervisor on top of an OS.</span>
<span class="k">IoT</span><span class="v"><b>Internet of Things</b>: connected devices (cameras, thermostats). Often poorly patched, with default creds.</span>
<span class="k">ICS / SCADA</span><span class="v">Industrial control. PLCs, HMIs. Legacy, segment heavily (Purdue model).</span>
<span class="k">RTOS</span><span class="v"><b>Real-Time OS</b>: deterministic timing. Avionics, medical devices.</span>
<span class="k">Embedded</span><span class="v">Fixed function; hard to update.</span>
<span class="k">High availability</span><span class="v">Design that tolerates failures: clustering, geo-redundancy.</span>
</div>

<h4>Considerations when choosing architecture</h4>
<p>Availability, resilience, cost, responsiveness, scalability, ease of deployment, associated risk, patch capability, acquisition/operation costs, ease of recovery, power/compute requirements.</p>

<h3>3.2 Securing enterprise infrastructure</h3>

<h4>Key devices</h4>
<table>
<tr><th>Device</th><th>Function</th></tr>
<tr><td>Firewall</td><td>Filters traffic. Stateful, NGFW, WAF (layer 7). <b>Analogy:</b> bouncer at the door checking IDs.</td></tr>
<tr><td>IDS</td><td><b>Intrusion Detection System</b>: detects and alerts. <b>Passive</b>. <b>Analogy:</b> security camera that records.</td></tr>
<tr><td>IPS</td><td><b>Intrusion Prevention System</b>: detects and <b>blocks</b>. <b>In-line</b>. <b>Analogy:</b> guard who tackles the intruder.</td></tr>
<tr><td>Switch</td><td>Layer 2. Port security, 802.1X, VLANs.</td></tr>
<tr><td>Router</td><td>Layer 3. ACLs, routing authentication.</td></tr>
<tr><td>Forward proxy</td><td>Client goes to internet via proxy. Web filtering. <b>Analogy:</b> mailroom that forwards your packages.</td></tr>
<tr><td>Reverse proxy</td><td>External clients reach your servers via proxy. Load balancing, WAF, TLS termination.</td></tr>
<tr><td>Load balancer</td><td>Distributes traffic (round robin, least connections, weighted). Layer 4 or 7. <b>Analogy:</b> host distributing customers among checkout lanes.</td></tr>
<tr><td>Sensors</td><td>NetFlow, sFlow, taps, packet brokers.</td></tr>
<tr><td>Jump server (bastion)</td><td>Sole hardened host to administer the rest. <b>Analogy:</b> single secure entrance to the building.</td></tr>
</table>

<h4>Deployment modes</h4>
<div class="kvs">
<span class="k">Active vs Passive</span><span class="v">For HA: Active/Active spreads load; Active/Passive one stands by.</span>
<span class="k">Inline vs Tap/Monitor</span><span class="v"><b>Inline</b> can block but adds latency. <b>Tap</b> only observes, doesn't affect availability.</span>
<span class="k">Fail-open vs Fail-closed</span><span class="v">If the control fails: <b>fail-open</b> lets through (availability), <b>fail-closed</b> blocks (security).</span>
</div>

<h4>Firewall types</h4>
<table>
<tr><th>Type</th><th>Layers</th><th>Characteristics</th></tr>
<tr><td>Packet filter</td><td>L3-L4</td><td>Stateless. Just IP/port. Most basic.</td></tr>
<tr><td>Stateful</td><td>L3-L4</td><td>Remembers connection state.</td></tr>
<tr><td>NGFW</td><td>L3-L7</td><td><b>Next-Gen</b>: DPI (Deep Packet Inspection), app-aware, user identity, integrated IPS, threat intel.</td></tr>
<tr><td>WAF</td><td>L7</td><td><b>Web Application Firewall</b>: protects web apps against OWASP Top 10 (SQLi, XSS).</td></tr>
<tr><td>UTM</td><td>L3-L7</td><td><b>Unified Threat Management</b>: all-in-one box (FW + AV + IPS + VPN + web filter).</td></tr>
</table>

<h4>VPN and tunnels</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> a VPN is a <b>private armored tunnel built through a public highway</b>. Cars on the highway can see your tunnel exists, but can't see what's inside it or where it goes.</div></div>
<div class="kvs">
<span class="k">Remote access VPN</span><span class="v">Individual user → corporate network.</span>
<span class="k">Site-to-site VPN</span><span class="v">Gateway to gateway (office ↔ datacenter).</span>
<span class="k">Full tunnel</span><span class="v">All traffic through VPN. More secure, worse performance.</span>
<span class="k">Split tunnel</span><span class="v">Only corporate traffic through VPN; the rest goes direct.</span>
<span class="k">Always-on VPN</span><span class="v">Always connected once there's network.</span>
<span class="k">Clientless VPN</span><span class="v">Over HTTPS from the browser, no client to install.</span>
</div>

<h4>IPsec — VPN at the network level</h4>
<div class="minicards">
<div class="minicard"><div class="h">AH — Authentication Header</div><p>Integrity and authentication. <b>Doesn't</b> encrypt. Rarely used.</p></div>
<div class="minicard"><div class="h">ESP — Encapsulating Security Payload</div><p>Encryption + integrity + authentication. The common one.</p></div>
<div class="minicard"><div class="h">IKE / IKEv2</div><p>Negotiates keys and SAs. UDP 500 (NAT-T on UDP 4500).</p></div>
</div>
<div class="kvs">
<span class="k">Transport mode</span><span class="v">Encrypts only the payload. Host-to-host.</span>
<span class="k">Tunnel mode</span><span class="v">Encrypts the entire IP packet. Gateway-to-gateway (site-to-site VPN).</span>
</div>

<h4>SD-WAN and SASE</h4>
<div class="term"><div class="t">SD-WAN</div><b>Software-Defined WAN</b>. Abstracts links (MPLS, internet, LTE) and routes dynamically by app and policy. Replaces expensive rigid MPLS.</div>

<div class="term"><div class="t">SASE</div><b>Secure Access Service Edge</b>. SD-WAN + cloud security services (CASB, ZTNA, SWG, FWaaS, DLP) delivered from the edge close to the user. <b>"Network + security as a service".</b></div>

<h4>Network access control</h4>
<div class="term"><div class="t">802.1X</div>Port-based authentication. Three roles:
<div class="flow">
<span class="step">Supplicant (client)</span><span class="arr">↔</span>
<span class="step">Authenticator (switch/AP)</span><span class="arr">↔</span>
<span class="step">Authentication Server (RADIUS)</span>
</div>
Uses <b>EAP</b> as auth protocol.</div>

<div class="term"><div class="t">NAC — Network Access Control</div>Before admitting a device to the network, verifies its <b>posture</b>: patches, AV, encryption, domain. If it fails → quarantine/remediation network. <b>Analogy:</b> health screening at the airport before you can board.</div>

<div class="term"><div class="t">Port security</div>Limit MACs per switch port, BPDU guard (prevents fake STP BPDUs), DHCP snooping (filters rogue DHCP), Dynamic ARP Inspection (prevents ARP spoofing).</div>

<h4>Design concepts</h4>
<div class="kvs">
<span class="k">Security by design</span><span class="v">Security built in from the start, not bolted on.</span>
<span class="k">Defense in depth</span><span class="v">Multiple layers; if one fails, another protects. <b>Analogy:</b> a castle with moat + wall + gate + guards + keep.</span>
<span class="k">Security zones</span><span class="v">Internet, DMZ, intranet, management, OT — each with its own trust level.</span>
<span class="k">Screened subnet (DMZ)</span><span class="v">Subnet between internet and LAN for exposed servers. <b>Analogy:</b> reception area between the street and the offices.</span>
<span class="k">East-West traffic</span><span class="v">Traffic between servers inside the datacenter. Usually the blind spot.</span>
<span class="k">Attack surface</span><span class="v">Sum of all exposed points. Minimize it.</span>
</div>

<h3>3.3 Protecting data</h3>

<h4>Data types</h4>
<div class="kvs">
<span class="k">Regulated</span><span class="v">Subject to law (GDPR, HIPAA, PCI DSS).</span>
<span class="k">Trade secret / IP</span><span class="v">Trade secrets, intellectual property.</span>
<span class="k">Legal information</span><span class="v">Legal documents, cases.</span>
<span class="k">Financial information</span><span class="v">Financial data.</span>
<span class="k">PII</span><span class="v"><b>Personally Identifiable Information</b>: data that identifies a person (ID, address).</span>
<span class="k">PHI</span><span class="v"><b>Protected Health Information</b>: health (HIPAA in US).</span>
<span class="k">Human-readable</span><span class="v">Plain text, documents.</span>
<span class="k">Non-human-readable</span><span class="v">Binary, hashes, structured data.</span>
</div>

<h4>Classifications</h4>
<p><b>Public · Sensitive · Private · Confidential · Critical · Restricted</b>. Each org defines its scheme; must be consistent and enforced.</p>

<h4>Data states — the three fronts</h4>
<div class="minicards">
<div class="minicard"><div class="h">At rest</div><p>Stored (disk, DB, backup). <b>Protection:</b> FDE, file-level, TDE.</p></div>
<div class="minicard"><div class="h">In transit</div><p>Travelling on network. <b>Protection:</b> TLS, IPsec, SSH.</p></div>
<div class="minicard"><div class="h">In use</div><p>In RAM/process being used. <b>Protection:</b> TEE, enclaves, confidential computing.</p></div>
</div>

<h4>Sovereignty and geolocation</h4>
<p>The applicable laws depend on the <b>country where data physically resides</b>. GDPR requires conditions to move data outside the EU (SCC, BCR, adequacy decisions).</p>

<h4>Protection methods</h4>
<p>Encryption · Hashing (integrity) · Masking · Tokenization · Obfuscation · Segmentation · Permission restrictions · DRM (Digital Rights Management).</p>

<h3>3.4 Resilience and recovery</h3>

<h4>High availability</h4>
<div class="compare">
<div><h5>Load balancing</h5><p>Spreads traffic among healthy nodes. Algorithms: round robin, least connections, IP hash, weighted.</p></div>
<div><h5>Clustering</h5><p>Coordinated nodes that appear as one. Automatic failover if one fails.</p></div>
</div>

<h4>Recovery sites</h4>
<table>
<tr><th>Type</th><th>Equipment</th><th>Typical RTO</th><th>Cost</th></tr>
<tr><td>Hot</td><td>Live operational, data sync'd in real time</td><td>Minutes – 1h</td><td>High</td></tr>
<tr><td>Warm</td><td>Hardware ready, somewhat outdated data</td><td>Hours</td><td>Medium</td></tr>
<tr><td>Cold</td><td>Just space + utilities; no hardware</td><td>Days – weeks</td><td>Low</td></tr>
</table>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> hot site = a hotel room ready with your toothbrush. Warm site = an empty hotel room (you bring stuff). Cold site = a vacant lot (build the hotel first).</div></div>
<p><b>Geographic dispersion:</b> sites separated enough to survive regional disasters (earthquake, blackout, flood).</p>

<h4>Continuity and capacity planning</h4>
<p>You plan <b>people</b>, <b>technology</b> and <b>infrastructure</b>. Growth forecast, seasonal peaks, backup resources.</p>

<h4>Recovery testing</h4>
<div class="minicards">
<div class="minicard"><div class="h">Tabletop exercise</div><p>Discussion of a scenario without touching systems. Cheapest. <b>Analogy:</b> fire drill on paper.</p></div>
<div class="minicard"><div class="h">Failover test</div><p>Real switch to the secondary site.</p></div>
<div class="minicard"><div class="h">Simulation</div><p>Realistic scenario with partial execution.</p></div>
<div class="minicard"><div class="h">Parallel processing</div><p>Alternate site processes in parallel without taking over production.</p></div>
</div>

<h4>Backups</h4>
<div class="kvs">
<span class="k">Full</span><span class="v">Complete copy.</span>
<span class="k">Incremental</span><span class="v">Only changes since the last backup (any).</span>
<span class="k">Differential</span><span class="v">Changes since the last <b>full</b>.</span>
<span class="k">Snapshot</span><span class="v">Photo of the state at one moment.</span>
<span class="k">Replication</span><span class="v">Continuous copy to another site.</span>
<span class="k">Journaling</span><span class="v">Log of changes for transactional recovery.</span>
</div>

<div class="callout exam"><span class="ico">★</span><div><b>3-2-1 rule:</b> 3 copies, on 2 different media, with 1 offsite. Modern variant <b>3-2-1-1-0</b>: 1 offline/immutable copy, 0 errors after verification. <b>Immutable</b> backups protect against ransomware.<br><b>Analogy:</b> a copy on your laptop, a copy on an external drive in a drawer, a copy in a cloud account in another country.</div></div>

<h4>Power</h4>
<div class="kvs">
<span class="k">UPS</span><span class="v"><b>Uninterruptible Power Supply</b>: battery for short outages and clean shutdown.</span>
<span class="k">Generator</span><span class="v">Generator for prolonged outages.</span>
<span class="k">PDU</span><span class="v"><b>Power Distribution Unit</b>: distributes and monitors power in a rack.</span>
<span class="k">Dual power supplies</span><span class="v">Servers with two power supplies, each on a different feed.</span>
</div>
`},

{
  id:"d4", title:"Domain 4 — Security Operations (28%)",
  html:`
<h2>Domain 4 — Security Operations</h2>
<div class="lead">The biggest domain (28%). The SOC's day-to-day: hardening, vulnerability management, monitoring, IAM, automation, incident response and forensics.</div>

<h3>4.1 Apply security techniques</h3>

<h4>Secure baselines</h4>
<div class="callout info"><span class="ico">ⓘ</span><div>A <b>baseline</b> is the minimum standard configuration every system must meet. Any deviation is a risk.<br><b>Analogy:</b> like a "minimum equipment" checklist for an aircraft — if any item fails, the plane doesn't take off.</div></div>
<div class="flow">
<span class="step">1. Establish</span><span class="arr">→</span>
<span class="step">2. Deploy</span><span class="arr">→</span>
<span class="step">3. Maintain</span>
</div>
<p>Validated with scans, GPO, MDM and tools like <b>SCAP</b> (Security Content Automation Protocol), <b>CIS Benchmarks</b> and <b>DISA STIGs</b> (DoD hardening guides).</p>

<h4>Hardening per target type</h4>
<table>
<tr><th>Target</th><th>Key actions</th></tr>
<tr><td>Mobile devices</td><td>MDM, encryption, screen lock, no jailbreak/root, official store only.</td></tr>
<tr><td>Workstations</td><td>Patching, AV/EDR, host firewall, GPO, app allow list, autorun off.</td></tr>
<tr><td>Switches / Routers</td><td>Strong passwords, SSH (not Telnet), SNMPv3, port security, ACLs, RBAC, separate management plane.</td></tr>
<tr><td>Cloud</td><td>IAM least privilege, MFA, logging (CloudTrail), encryption by default, restrictive security groups.</td></tr>
<tr><td>Servers</td><td>Minimize services, patch, OS hardening, restrict admins, monitoring.</td></tr>
<tr><td>ICS / SCADA</td><td>Segment (Purdue model), unidirectional gateway, no direct internet.</td></tr>
<tr><td>IoT</td><td>Change default creds, disable UPnP, dedicated VLAN, patch firmware.</td></tr>
<tr><td>Embedded / RTOS</td><td>Minimize surface, signed firmware.</td></tr>
</table>

<h4>Wireless</h4>
<div class="minicards">
<div class="minicard"><div class="h">Site survey</div><p>Measure coverage, SNR, interference to design Wi-Fi.</p></div>
<div class="minicard"><div class="h">Heat map</div><p>Visual map of signal strength to place APs and detect rogues.</p></div>
</div>

<h4>Mobile — deployment models</h4>
<div class="kvs">
<span class="k">BYOD</span><span class="v"><b>Bring Your Own Device</b>: employee's, mixed use.</span>
<span class="k">COBO</span><span class="v"><b>Corporate-Owned, Business-Only</b>: corporate, work only.</span>
<span class="k">COPE</span><span class="v"><b>Corporate-Owned, Personally-Enabled</b>: corporate, personal use allowed.</span>
<span class="k">CYOD</span><span class="v"><b>Choose Your Own Device</b>: employee picks from approved catalog.</span>
</div>

<div class="term"><div class="t">MDM — Mobile Device Management</div>Centralized mobile management: policies, encryption, containers, remote wipe, app management.<div class="why"><b>UEM (Unified Endpoint Management)</b> extends MDM to laptops, IoT, etc.</div></div>

<h4>Wireless security — protocols</h4>
<table>
<tr><th>Protocol</th><th>Status</th><th>Notes</th></tr>
<tr><td>WEP</td><td>✗ Broken</td><td>Never use.</td></tr>
<tr><td>WPA</td><td>✗ Vulnerable</td><td>TKIP. Deprecated.</td></tr>
<tr><td>WPA2</td><td>✓ Acceptable</td><td>CCMP/AES. Personal (PSK) or Enterprise (802.1X).</td></tr>
<tr><td>WPA3</td><td>★ Recommended</td><td><b>SAE</b> (Simultaneous Authentication of Equals) replaces PSK; resists offline dictionary attacks. Forward secrecy.</td></tr>
</table>

<h4>EAP — authentication methods</h4>
<div class="kvs">
<span class="k">EAP-TLS</span><span class="v">★ Most secure. Mutual certificates (client and server). No passwords.</span>
<span class="k">EAP-TTLS</span><span class="v">TLS tunnel with cert only on server; client auth inside.</span>
<span class="k">EAP-FAST</span><span class="v">Cisco. No certs (uses PAC).</span>
<span class="k">PEAP</span><span class="v"><b>Protected EAP</b>: TLS tunnel + internal authentication (typically MSCHAPv2).</span>
</div>

<h4>Application security</h4>
<div class="minicards">
<div class="minicard"><div class="h">Input validation</div><p>Server-side; prefer <b>allowlist</b> (what's permitted) over denylist.</p></div>
<div class="minicard"><div class="h">Secure cookies</div><p>Flags <b>HttpOnly</b> (no JS access), <b>Secure</b> (HTTPS only), <b>SameSite</b> (anti-CSRF).</p></div>
<div class="minicard"><div class="h">SAST</div><p><b>Static Application Security Testing</b>: analyze code without running. Detects SQLi, hardcoded secrets.</p></div>
<div class="minicard"><div class="h">DAST</div><p><b>Dynamic AST</b>: tests on running app (like an attacker).</p></div>
<div class="minicard"><div class="h">SCA</div><p><b>Software Composition Analysis</b>: audits third-party dependencies.</p></div>
<div class="minicard"><div class="h">Code signing</div><p>Sign binaries to verify authenticity/integrity.</p></div>
<div class="minicard"><div class="h">Sandboxing</div><p>Run in isolated environment.</p></div>
</div>

<h3>4.2 Asset and vulnerability management</h3>

<h4>Assets</h4>
<div class="kvs">
<span class="k">Acquisition / procurement</span><span class="v">Purchase with security validation.</span>
<span class="k">Assignment / accounting</span><span class="v">Assigned owner, classification.</span>
<span class="k">Monitoring / tracking</span><span class="v">Up-to-date inventory.</span>
</div>

<h4>Disposal / decommissioning</h4>
<div class="callout warn"><span class="ico">⚠</span><div>Before disposing of equipment: <b>sanitize or destroy</b>. A drive "wiped" with normal format still contains all the data.</div></div>
<div class="kvs">
<span class="k">Sanitization</span><span class="v">Securely erase: multi-pass overwrite, <b>cryptographic erase</b> (delete the encryption key), secure erase.</span>
<span class="k">Destruction</span><span class="v">Physical: <b>degaussing</b> (for magnetic HDDs), shredding, incineration.</span>
<span class="k">Certification</span><span class="v">Signed proof of destruction.</span>
<span class="k">Data retention</span><span class="v">Policy on how long to keep before deleting (legal vs practical).</span>
</div>

<h4>Vulnerability identification</h4>
<div class="minicards">
<div class="minicard"><div class="h">Vulnerability scan</div><p>Automated scanner: Nessus, OpenVAS, Qualys. <b>Authenticated</b> (with creds, sees more) vs <b>unauthenticated</b>.</p></div>
<div class="minicard"><div class="h">SAST / DAST / SCA</div><p>For code and dependencies.</p></div>
<div class="minicard"><div class="h">Threat feeds</div><p>OSINT (open), proprietary, ISACs (sectoral), dark web monitoring.</p></div>
<div class="minicard"><div class="h">Penetration testing</div><p>Authorized simulated attack.</p></div>
<div class="minicard"><div class="h">Bug bounty</div><p>Program that rewards reporting vulnerabilities.</p></div>
<div class="minicard"><div class="h">System audit</div><p>Internal or external review.</p></div>
</div>

<div class="term"><div class="t">STIX / TAXII</div>Formats to <b>share threat intelligence</b>. STIX = structured language; TAXII = transport protocol.</div>

<h4>Vulnerability analysis</h4>
<div class="kvs">
<span class="k">Confirmation</span><span class="v">Eliminate <b>false positives</b> (alert without threat) and <b>false negatives</b> (real threat undetected — worse).</span>
<span class="k">CVE</span><span class="v"><b>Common Vulnerabilities and Exposures</b>: unique identifier of each public vulnerability (CVE-2024-12345).</span>
<span class="k">CVSS</span><span class="v"><b>Common Vulnerability Scoring System</b>: scores from 0 to 10. Metrics <b>Base</b> (intrinsic), <b>Temporal</b> (changes), <b>Environmental</b> (your org).</span>
<span class="k">CWE</span><span class="v"><b>Common Weakness Enumeration</b>: classifies the <b>type</b> of weakness (CWE-89 = SQLi).</span>
<span class="k">Exposure factor</span><span class="v">What percentage of the asset is affected.</span>
<span class="k">Industry impact</span><span class="v">Your sector affects real criticality.</span>
<span class="k">Risk tolerance</span><span class="v">How much risk you accept by context.</span>
</div>

<h4>Response and remediation</h4>
<div class="minicards">
<div class="minicard"><div class="h">Patching</div><p>Apply patches in order: test → ring deployment → production.</p></div>
<div class="minicard"><div class="h">Insurance</div><p>Transfer risk to an insurer.</p></div>
<div class="minicard"><div class="h">Segmentation</div><p>Isolate the vulnerable while patching.</p></div>
<div class="minicard"><div class="h">Compensating controls</div><p>Alternative controls when you can't patch.</p></div>
<div class="minicard"><div class="h">Exceptions / exemptions</div><p>Formally accept with deadline and owner.</p></div>
</div>
<p><b>Validation:</b> rescan, audit, verification. <b>Reporting</b> to stakeholders and trend metrics.</p>

<h3>4.3 Alerting and monitoring</h3>

<h4>What's monitored</h4>
<p>Systems, applications and infrastructure.</p>

<h4>Activities</h4>
<div class="kvs">
<span class="k">Log aggregation</span><span class="v">Centralize logs (SIEM).</span>
<span class="k">Alerting</span><span class="v">Generate alerts per rules.</span>
<span class="k">Scanning</span><span class="v">Continuous vulnerability search.</span>
<span class="k">Reporting</span><span class="v">Reports to management and ops.</span>
<span class="k">Archiving</span><span class="v">Long-term storage (compliance, forensics).</span>
<span class="k">Alert response</span><span class="v">Quarantine, <b>alert tuning</b> to reduce analyst fatigue.</span>
</div>

<h4>Tools</h4>
<div class="minicards">
<div class="minicard"><div class="h">SCAP</div><p>Security Content Automation Protocol — standardizes config description and evaluation.</p></div>
<div class="minicard"><div class="h">Benchmarks</div><p>CIS Benchmarks, DISA STIGs — hardening guides.</p></div>
<div class="minicard"><div class="h">Agents / Agentless</div><p>Agent on host vs remote scan.</p></div>
<div class="minicard"><div class="h">SIEM</div><p><b>Security Information & Event Management</b>: aggregates, normalizes, correlates, alerts. <b>Analogy:</b> command center with monitors from every camera in the building. Splunk, Sentinel, QRadar, Elastic.</p></div>
<div class="minicard"><div class="h">AV / EDR / XDR</div><p>Antivirus → EDR (endpoint) → XDR (endpoint+network+email+cloud+identity).</p></div>
<div class="minicard"><div class="h">DLP</div><p><b>Data Loss Prevention</b>: detects/blocks exfiltration of sensitive data. <b>Analogy:</b> exit security gate scanning briefcases.</p></div>
<div class="minicard"><div class="h">SNMP traps</div><p>Events sent by network devices. SNMPv3 encrypted.</p></div>
<div class="minicard"><div class="h">NetFlow</div><p>Network flow metadata (no payload). Cisco. Variants: sFlow, IPFIX.</p></div>
</div>

<h3>4.4 Enhance enterprise security</h3>

<h4>Firewall</h4>
<p>Explicit rules, <b>deny by default</b>, ACLs, segmentation with screened subnets, logging on.</p>

<h4>IDS / IPS — detection methods</h4>
<div class="kvs">
<span class="k">Signature-based</span><span class="v">Compares against known patterns. Catches known, not zero-days.</span>
<span class="k">Anomaly-based</span><span class="v">Compares against a baseline; what's different is suspicious.</span>
<span class="k">Behavioral</span><span class="v">Analyzes behavior (UEBA). Catches compromised accounts.</span>
<span class="k">Trend analysis</span><span class="v">Catches slow attacks that get past event-level detection.</span>
</div>

<h4>Web filter</h4>
<div class="kvs">
<span class="k">Agent-based</span><span class="v">Client on each endpoint.</span>
<span class="k">Centralized proxy</span><span class="v">All traffic through a central proxy.</span>
<span class="k">URL scanning</span><span class="v">Real-time URL analysis.</span>
<span class="k">Content categorization</span><span class="v">Classifies sites (gaming, adult, malware).</span>
<span class="k">Block rules</span><span class="v">Explicit rules.</span>
<span class="k">Reputation</span><span class="v">Trust score by domain/IP.</span>
</div>

<h4>OS hardening</h4>
<div class="kvs">
<span class="k">GPO</span><span class="v"><b>Group Policy Object</b>: applies massive config in Windows AD.</span>
<span class="k">SELinux / AppArmor</span><span class="v">MAC on Linux. Confines processes per policy.</span>
</div>

<h4>Secure protocol implementation (ports to know)</h4>
<table>
<tr><th>Insecure</th><th>Secure</th><th>Ports</th></tr>
<tr><td>Telnet (23)</td><td><b>SSH</b></td><td>22</td></tr>
<tr><td>FTP (21)</td><td><b>SFTP</b> (over SSH) / <b>FTPS</b> (over TLS)</td><td>22 / 990, 989</td></tr>
<tr><td>HTTP (80)</td><td><b>HTTPS</b> (TLS)</td><td>443</td></tr>
<tr><td>SMTP (25)</td><td><b>SMTPS / STARTTLS</b></td><td>465 / 587</td></tr>
<tr><td>POP3 (110) / IMAP (143)</td><td><b>POP3S</b> / <b>IMAPS</b></td><td>995 / 993</td></tr>
<tr><td>SNMPv1/v2c (161)</td><td><b>SNMPv3</b> (authenticated and encrypted)</td><td>161</td></tr>
<tr><td>LDAP (389)</td><td><b>LDAPS</b> / StartTLS</td><td>636</td></tr>
<tr><td>DNS (53)</td><td><b>DNS over TLS</b> / DoH</td><td>853</td></tr>
</table>

<h4>DNS and email security</h4>
<div class="term"><div class="t">DNS filtering</div>Blocks resolution of malicious domains. <b>Ex:</b> Cisco Umbrella, Quad9.</div>

<div class="term"><div class="t">DNSSEC</div>Cryptographically signs DNS responses. Prevents poisoning.</div>

<div class="term"><div class="t">SPF, DKIM, DMARC — the email anti-spoofing trio</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> SPF is the <b>guest list at the door</b> ("only these IPs can send mail as me"). DKIM is the <b>tamper-evident seal</b> on the envelope. DMARC is the <b>instruction to security</b> ("if guest list and seal both fail, kick them out").</div></div>
<div class="kvs">
<span class="k">SPF</span><span class="v"><b>Sender Policy Framework</b>: TXT record listing IPs allowed to send mail from your domain.</span>
<span class="k">DKIM</span><span class="v"><b>DomainKeys Identified Mail</b>: cryptographic signature of the email; receiver verifies with public key in DNS.</span>
<span class="k">DMARC</span><span class="v"><b>Domain-based Message Authentication</b>: policy to apply (<code>none</code>/<code>quarantine</code>/<code>reject</code>) when SPF/DKIM fail + reporting.</span>
</div></div>

<div class="term"><div class="t">Email gateway</div>Inbound filtering: anti-spam, antivirus, attachment sandboxing, anti-phishing.</div>

<h4>Other tools</h4>
<div class="minicards">
<div class="minicard"><div class="h">FIM</div><p><b>File Integrity Monitoring</b>: detects changes in critical files (Tripwire, AIDE, OSSEC).</p></div>
<div class="minicard"><div class="h">DLP</div><p>Endpoint, network, cloud — detects and blocks exfiltration.</p></div>
<div class="minicard"><div class="h">NAC</div><p>Verifies device posture before admission.</p></div>
<div class="minicard"><div class="h">EDR / XDR</div><p>Detection and extended response.</p></div>
<div class="minicard"><div class="h">UEBA</div><p><b>User and Entity Behavior Analytics</b>: detects behavioral anomalies signaling compromised accounts.</p></div>
</div>

<h3>4.5 Identity and access (IAM)</h3>

<h4>Provisioning / deprovisioning</h4>
<p>User lifecycle: <b>Joiner-Mover-Leaver</b>. Automate to avoid orphan accounts after departures.</p>

<h4>Identity proofing</h4>
<p>Verify the person <b>is who they say</b> before issuing a credential. Documents, biometrics, video verification.</p>

<h4>Federation and SSO</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> SSO is like your <b>passport</b>. You identify yourself once at the airport and with that identity you cross multiple checkpoints. <b>Federation</b> is when different countries trust each other's passports.</div></div>

<div class="term"><div class="t">SAML</div><b>Security Assertions Markup Language</b>: XML-based federation, typical in enterprise SSO. Roles: <b>IdP</b> (Identity Provider), <b>SP</b> (Service Provider), <b>principal</b> (user).</div>

<div class="term"><div class="t">OAuth 2.0</div><b>Authorization</b> protocol (not authentication). Lets you delegate access without sharing credentials. Access tokens. <b>Example:</b> "Login with Google" for third-party apps.</div>

<div class="term"><div class="t">OIDC — OpenID Connect</div><b>Authentication</b> layer over OAuth 2.0. Adds ID token. What "Login with X" really uses.</div>

<div class="term"><div class="t">LDAP / LDAPS</div>Directory protocol (query users, groups). LDAP in clear (389), <b>LDAPS</b> over TLS (636).</div>

<div class="term"><div class="t">Kerberos</div>Ticket-based authentication. Roles: <b>KDC</b> (Key Distribution Center), <b>TGT</b> (Ticket Granting Ticket), <b>TGS</b> (Ticket Granting Service). Port 88. Time-sensitive (tickets expire fast).<div class="why"><b>Analogy:</b> like a theme park. You buy one ticket at the gate (TGT) that lets you grab individual ride tickets (TGS) for each attraction.</div></div>

<h4>Access control models — the pillars</h4>
<table>
<tr><th>Model</th><th>Decision based on</th><th>Example</th></tr>
<tr><td><b>MAC</b></td><td>System-assigned labels; user CANNOT change</td><td>SE Linux, military (Top Secret/Secret/Confidential)</td></tr>
<tr><td><b>DAC</b></td><td>Resource owner decides</td><td>Classic NTFS permissions</td></tr>
<tr><td><b>RBAC</b></td><td>User's role</td><td>Active Directory groups</td></tr>
<tr><td><b>ABAC</b></td><td>Attributes: user, resource, action, context (time, geo, device)</td><td>Dynamic Zero Trust policies</td></tr>
<tr><td><b>Rule-based</b></td><td>Global rules independent of role</td><td>Firewall ACLs, time-of-day</td></tr>
</table>

<h4>MFA — the factors</h4>
<div class="callout exam"><span class="ico">★</span><div><b>Tip:</b> two passwords are <b>NOT</b> MFA — they're still the same factor (something you know). Must be <b>distinct factors</b>.</div></div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — ATM as MFA:</b> the <b>card</b> (something you have) + <b>PIN</b> (something you know). Just the card alone wouldn't be MFA.</div></div>
<div class="minicards">
<div class="minicard"><div class="h">Something you KNOW</div><p>Password, PIN, secret answer.</p></div>
<div class="minicard"><div class="h">Something you HAVE</div><p>Token (HOTP, TOTP), smart card, FIDO2/U2F (YubiKey), push.</p></div>
<div class="minicard"><div class="h">Something you ARE</div><p>Biometrics: fingerprint, iris, voice, face, vein.</p></div>
<div class="minicard"><div class="h">Somewhere you ARE</div><p>Geolocation, corporate IP.</p></div>
<div class="minicard"><div class="h">Something you DO</div><p>Typing pattern, signature dynamics.</p></div>
</div>
<div class="kvs">
<span class="k">FAR</span><span class="v"><b>False Acceptance Rate</b>: lets in who shouldn't. <b>Dangerous</b>.</span>
<span class="k">FRR</span><span class="v"><b>False Rejection Rate</b>: rejects who should pass. Annoying.</span>
<span class="k">CER</span><span class="v"><b>Crossover Error Rate</b>: where FAR and FRR meet. <b>Lower is better</b>.</span>
</div>

<h4>Password best practices (current NIST 800-63B)</h4>
<div class="callout tip"><span class="ico">▲</span><div>NIST <b>discourages</b> forced periodic changes unless there's a sign of compromise. Prioritize <b>length</b> (min 8, ideal 14+) and <b>checking against breach lists</b> (Have I Been Pwned). Use password managers. <b>Passwordless</b> (FIDO2/passkeys) when possible.</div></div>

<h4>PAM — Privileged Access Management</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> PAM is like a <b>bank vault for the master keys</b>. You don't carry them around; you check them out for a specific job, the safe records who took them and when, and they're auto-rotated.</div></div>
<div class="kvs">
<span class="k">JIT permissions</span><span class="v"><b>Just-in-Time</b>: elevated privileges only when needed, time-limited.</span>
<span class="k">Password vaulting</span><span class="v">Vault with auto-rotation.</span>
<span class="k">Ephemeral credentials</span><span class="v">Short-lived, non-reusable credentials.</span>
<span class="k">Session recording</span><span class="v">Records privileged sessions for audit.</span>
</div>

<h3>4.6 Automation and orchestration</h3>

<h4>Use cases</h4>
<p>User provisioning, resource provisioning, guard rails, security groups, ticket creation, escalation, enable/disable services, continuous integration, API integrations, continuous scanning.</p>

<h4>Benefits</h4>
<div class="minicards">
<div class="minicard"><div class="h">Efficiency</div><p>Tasks in seconds vs human hours.</p></div>
<div class="minicard"><div class="h">Reaction time</div><p>Automated response to threats.</p></div>
<div class="minicard"><div class="h">Workforce multiplier</div><p>One analyst does the work of five.</p></div>
<div class="minicard"><div class="h">Baseline enforcement</div><p>Standard config always applied.</p></div>
<div class="minicard"><div class="h">Standard config</div><p>Zero "drift".</p></div>
<div class="minicard"><div class="h">Scaling</div><p>Grow without hiring more.</p></div>
<div class="minicard"><div class="h">Retention</div><p>Less tedium → happier analysts.</p></div>
<div class="minicard"><div class="h">Error reduction</div><p>Humans make mistakes; scripts don't (if well written).</p></div>
</div>

<h4>Considerations (the dark side)</h4>
<p>Complexity, implementation cost, <b>single point of failure</b> (if automation fails, everything fails), technical requirements, ongoing maintenance debt.</p>

<h3>4.7 Incident response (IR)</h3>

<h4>NIST SP 800-61 process</h4>
<div class="flow">
<span class="step">1. Preparation</span><span class="arr">→</span>
<span class="step">2. Detection & analysis</span><span class="arr">→</span>
<span class="step">3. Containment · Eradication · Recovery</span><span class="arr">→</span>
<span class="step">4. Post-incident (lessons learned)</span>
</div>

<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> like a hospital ER. <b>Preparation</b> = stocked supplies, trained staff. <b>Detection</b> = triage. <b>Containment</b> = stop the bleeding. <b>Eradication</b> = surgery removes the cause. <b>Recovery</b> = rehab. <b>Lessons learned</b> = case review with the team.</div></div>

<div class="kvs">
<span class="k">Preparation</span><span class="v">Policies, tools, team, training, runbooks.</span>
<span class="k">Detection</span><span class="v">Identify the incident, scope, severity.</span>
<span class="k">Containment</span><span class="v">Stop the spread: isolate host, segment.</span>
<span class="k">Eradication</span><span class="v">Remove the malware and close the exploited vulnerability.</span>
<span class="k">Recovery</span><span class="v">Restore, monitor, validate.</span>
<span class="k">Post-incident</span><span class="v">Lessons learned, update runbooks, improve.</span>
</div>

<h4>Training and testing</h4>
<div class="minicards">
<div class="minicard"><div class="h">Tabletop</div><p>Scenario discussion in a room. Cheapest.</p></div>
<div class="minicard"><div class="h">Walkthrough</div><p>Step-by-step plan review.</p></div>
<div class="minicard"><div class="h">Simulation</div><p>Realistic partial execution.</p></div>
</div>

<h4>Root cause analysis</h4>
<p><b>5 Whys</b> (ask "why" five times to reach the real cause), <b>fishbone</b> (Ishikawa), chronological analysis.</p>

<h4>Threat hunting</h4>
<p><b>Proactive</b> hunting for threats assuming you're already compromised. Hypothesis-based, TTPs (from MITRE ATT&CK), IoCs.</p>

<div class="term"><div class="t">MITRE ATT&CK</div>Framework that catalogs <b>tactics, techniques and procedures (TTPs)</b> used by attackers. De-facto standard for hunting and red teaming.</div>

<h4>Digital forensics</h4>
<div class="callout warn"><span class="ico">⚠</span><div>The exam tests heavily on <b>evidence preservation</b>. Mishandled evidence is useless in court.</div></div>
<div class="kvs">
<span class="k">Legal hold</span><span class="v">Legal obligation to preserve info that may be relevant in litigation.</span>
<span class="k">Chain of custody</span><span class="v">Unalterable record of who handled the evidence, when and how.</span>
<span class="k">Acquisition</span><span class="v">Evidence collection. <b>Bit-for-bit image</b> with write blocker (prevents writes).</span>
<span class="k">Order of volatility</span><span class="v">Capture order: registers/CPU cache → RAM → temp → disk → backups → remote logs.</span>
<span class="k">Hashing</span><span class="v">Hash evidence on collection and on use; same hash = unchanged.</span>
<span class="k">Reporting</span><span class="v">Documentation of findings.</span>
<span class="k">E-discovery</span><span class="v">Collection of electronic info for legal processes.</span>
</div>

<h3>4.8 Investigation data sources</h3>

<h4>Logs</h4>
<div class="kvs">
<span class="k">Firewall logs</span><span class="v">Allows, denies, connections.</span>
<span class="k">Application logs</span><span class="v">App events.</span>
<span class="k">Endpoint logs</span><span class="v">EDR, AV.</span>
<span class="k">OS logs</span><span class="v">Windows Event Log: <b>4624</b> login OK, <b>4625</b> failed login, <b>4688</b> process creation. Linux: <code>/var/log/auth.log</code>, syslog.</span>
<span class="k">IPS / IDS logs</span><span class="v">Detection/blocking alerts.</span>
<span class="k">Network logs</span><span class="v">Switches, routers, NetFlow.</span>
<span class="k">Metadata</span><span class="v">Email headers, file properties.</span>
</div>

<h4>Other sources</h4>
<p>Vulnerability scans, automated reports, dashboards, <b>packet captures</b> (.pcap, opens with Wireshark/tcpdump).</p>
`},

{
  id:"d5", title:"Domain 5 — Program Management & Oversight (20%)",
  html:`
<h2>Domain 5 — Security Program Management and Oversight</h2>
<div class="lead">The management side: governance, risk, third parties, compliance, audits, training. Less technical, more processes, contracts and metrics.</div>

<h3>5.1 Governance</h3>

<h4>Hierarchy of directives</h4>
<div class="flow">
<span class="step">Policy (what/why)</span><span class="arr">→</span>
<span class="step">Standard (specific, mandatory)</span><span class="arr">→</span>
<span class="step">Procedure (step by step)</span><span class="arr">→</span>
<span class="step">Guideline (recommendation)</span>
</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — driving:</b> <b>Policy</b> = "drive safely". <b>Standard</b> = "speed limit 50 mph here". <b>Procedure</b> = "if you skid, turn into the skid". <b>Guideline</b> = "for best mileage, drive smoothly".</div></div>
<div class="kvs">
<span class="k">Policy</span><span class="v">High-level. Approved by management. <b>What</b> and <b>why</b>.</span>
<span class="k">Standard</span><span class="v">Specific and mandatory. <b>How</b> at high level.</span>
<span class="k">Procedure</span><span class="v">Executable step by step.</span>
<span class="k">Guideline</span><span class="v">Recommendation; not mandatory.</span>
</div>

<h4>Common policies</h4>
<div class="minicards">
<div class="minicard"><div class="h">AUP</div><p><b>Acceptable Use Policy</b>: what users can and can't do with resources.</p></div>
<div class="minicard"><div class="h">InfoSec policy</div><p>General information security policy.</p></div>
<div class="minicard"><div class="h">Business continuity</div><p>How to keep the business running during disruptions.</p></div>
<div class="minicard"><div class="h">Disaster recovery</div><p>How to recover after major disaster.</p></div>
<div class="minicard"><div class="h">Incident response</div><p>How to manage incidents.</p></div>
<div class="minicard"><div class="h">SDLC</div><p><b>Software Development Lifecycle</b>: secure development cycle.</p></div>
<div class="minicard"><div class="h">Change management</div><p>How changes are approved and applied.</p></div>
<div class="minicard"><div class="h">Password policy</div><p>Password rules.</p></div>
<div class="minicard"><div class="h">Data classification</div><p>How to classify and handle data.</p></div>
</div>

<h4>External considerations</h4>
<div class="kvs">
<span class="k">Regulatory</span><span class="v">GDPR, HIPAA, PCI DSS, SOX, GLBA.</span>
<span class="k">Legal</span><span class="v">Local/national/international laws.</span>
<span class="k">Industry</span><span class="v">ISO 27001/27002, NIST CSF, COBIT.</span>
<span class="k">Local · Regional · National · Global</span><span class="v">Different geographic levels.</span>
</div>

<h4>Governance structures</h4>
<div class="minicards">
<div class="minicard"><div class="h">Boards</div><p>Board of directors — high-level oversight.</p></div>
<div class="minicard"><div class="h">Committees</div><p>Risk committee, security committee.</p></div>
<div class="minicard"><div class="h">Government entities</div><p>External regulators.</p></div>
<div class="minicard"><div class="h">Centralized vs decentralized</div><p>Trade-off between control and agility.</p></div>
</div>

<h4>Roles and responsibilities over data</h4>
<table>
<tr><th>Role</th><th>Responsibility</th></tr>
<tr><td><b>Data owner</b></td><td>Ultimately responsible; classifies the data.</td></tr>
<tr><td><b>Data controller</b></td><td>Decides purposes and means of processing (GDPR).</td></tr>
<tr><td><b>Data processor</b></td><td>Processes on behalf of the controller.</td></tr>
<tr><td><b>Data custodian / steward</b></td><td>Implements daily controls.</td></tr>
<tr><td><b>DPO</b></td><td>Data Protection Officer (mandatory under GDPR in many cases).</td></tr>
<tr><td><b>CISO / CSO</b></td><td>Top security executive.</td></tr>
</table>

<h3>5.2 Risk management</h3>

<h4>Identification and assessment</h4>
<p><b>Risk identification</b>: list threats and vulnerabilities. <b>Risk assessment</b> with frequencies: ad hoc, recurring, one-time, continuous.</p>

<h4>Analysis: qualitative vs quantitative</h4>
<div class="compare">
<div><h5>Qualitative</h5><p>Subjective. High/Medium/Low, 5×5 matrix. Quick, no exact data. <b>When:</b> when you don't have reliable numerical data.</p></div>
<div><h5>Quantitative</h5><p>Numeric, monetary. Needs data. <b>When:</b> to justify investment with figures.</p></div>
</div>

<h4>Formulas you'll see on the exam</h4>
<div class="callout exam"><span class="ico">★</span><div><b>Memorize:</b><br>
<code>SLE = AV × EF</code> (loss per event)<br>
<code>ARO</code> = events per year<br>
<code>ALE = SLE × ARO</code> (annual expected loss)</div></div>
<div class="kvs">
<span class="k">AV</span><span class="v">Asset Value.</span>
<span class="k">EF</span><span class="v">Exposure Factor (0 to 1, % affected).</span>
<span class="k">SLE</span><span class="v">Single Loss Expectancy.</span>
<span class="k">ARO</span><span class="v">Annualized Rate of Occurrence (events/year).</span>
<span class="k">ALE</span><span class="v">Annualized Loss Expectancy.</span>
</div>
<div class="callout example"><span class="ico">▶</span><div><b>Example:</b> server worth $10,000, fire destroys 50% (EF=0.5), happens every 4 years (ARO=0.25).<br>SLE = 10,000 × 0.5 = <b>$5,000</b><br>ALE = 5,000 × 0.25 = <b>$1,250/year</b><br>If a control costs less than $1,250/year, it pays off.</div></div>

<h4>Risk register</h4>
<p>Living repository: ID, description, owner, <b>KRI</b> (Key Risk Indicator), threshold, probability, impact, treatment, status.</p>

<h4>Risk appetite vs risk tolerance</h4>
<div class="kvs">
<span class="k">Risk appetite</span><span class="v">Total risk the org is willing to take.</span>
<span class="k">Risk tolerance</span><span class="v">Acceptable deviation from the appetite.</span>
</div>
<div class="minicards">
<div class="minicard"><div class="h">Expansionary</div><p>Aggressive, growth-seeking. Takes more risk.</p></div>
<div class="minicard"><div class="h">Neutral</div><p>Balanced.</p></div>
<div class="minicard"><div class="h">Conservative</div><p>Risk-averse.</p></div>
</div>

<h4>Treatment strategies — the 4 actions</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy — driving in a storm:</b> <b>Mitigate</b> = drive slower, lights on. <b>Transfer</b> = car insurance. <b>Accept</b> = drive on, eyes open. <b>Avoid</b> = stay home.</div></div>
<div class="minicards">
<div class="minicard"><div class="h">Mitigate</div><p>Reduce with controls (firewall, patching).</p></div>
<div class="minicard"><div class="h">Transfer</div><p>Pass to a third party (insurance, outsourcing).</p></div>
<div class="minicard"><div class="h">Accept</div><p>Take it on (formal, with permanent <b>exemption</b> or temporary <b>exception</b>).</p></div>
<div class="minicard"><div class="h">Avoid</div><p>Eliminate the risk-generating activity.</p></div>
</div>

<h4>BIA — Business Impact Analysis</h4>
<p>Identifies critical functions, dependencies and impacts. Provides the metrics that drive DR/BC:</p>
<div class="kvs">
<span class="k">RTO</span><span class="v"><b>Recovery Time Objective</b>: max acceptable time to be operational again.</span>
<span class="k">RPO</span><span class="v"><b>Recovery Point Objective</b>: max amount of data (in time) acceptable to lose.</span>
<span class="k">MTTR</span><span class="v"><b>Mean Time To Repair/Restore</b>: average time to repair.</span>
<span class="k">MTBF</span><span class="v"><b>Mean Time Between Failures</b>: average time between failures.</span>
<span class="k">MTTF</span><span class="v"><b>Mean Time To Failure</b>: for non-repairable components.</span>
</div>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> RPO = "how much of my notebook can I afford to lose?". RTO = "how long can I survive without my notebook?". RPO sets backup frequency; RTO sets how fast you must restore.</div></div>

<h3>5.3 Third-party risk management</h3>

<h4>Vendor assessment</h4>
<div class="kvs">
<span class="k">Penetration testing</span><span class="v">Pentest the vendor.</span>
<span class="k">Right-to-audit clause</span><span class="v">Contractual right to audit them.</span>
<span class="k">Evidence of internal audits</span><span class="v">SOC 2 Type II, ISO 27001, certifications.</span>
<span class="k">Independent assessments</span><span class="v">Third-party audits.</span>
<span class="k">Supply chain analysis</span><span class="v">Analysis of their entire supply chain.</span>
</div>

<h4>Vendor selection</h4>
<div class="kvs">
<span class="k">Due diligence</span><span class="v">Reasonable prior research before contracting.</span>
<span class="k">Conflict of interest</span><span class="v">Verify there are no conflicts.</span>
</div>

<h4>Types of contractual agreements</h4>
<table>
<tr><th>Agreement</th><th>Purpose</th></tr>
<tr><td><b>SLA</b></td><td><b>Service Level Agreement</b>: quantifiable levels (99.9% uptime, 24/7 support) and <b>penalties</b> if missed. <b>Analogy:</b> "30 min delivery or it's free".</td></tr>
<tr><td><b>MOA / MOU</b></td><td>Memorandum of Agreement / Understanding: statement of intent, not always binding.</td></tr>
<tr><td><b>MSA</b></td><td><b>Master Service Agreement</b>: general framework between two parties; under it, specific SOWs are signed.</td></tr>
<tr><td><b>SOW / WO</b></td><td><b>Statement of Work / Work Order</b>: specific job (scope, deliverables, deadlines) under the MSA.</td></tr>
<tr><td><b>NDA</b></td><td><b>Non-Disclosure Agreement</b>: confidentiality on shared info. <b>Analogy:</b> a "don't tell mom" pinky promise that's legally enforceable.</td></tr>
<tr><td><b>BPA</b></td><td><b>Business Partnership Agreement</b>: relationship between partners.</td></tr>
</table>

<h4>Vendor monitoring</h4>
<p>Ongoing: periodic questionnaires, <b>rules of engagement</b> (in pentests: scope and rules), recurring reports, SLA metrics.</p>

<h3>5.4 Compliance</h3>

<h4>Compliance reporting</h4>
<div class="kvs">
<span class="k">Internal</span><span class="v">To board, internal committees.</span>
<span class="k">External</span><span class="v">To regulators, customers, auditors.</span>
</div>

<h4>Consequences of non-compliance</h4>
<div class="callout warn"><span class="ico">⚠</span><div>GDPR can fine up to <b>4% global revenue or €20M</b> (whichever higher). HIPAA, PCI, SOX also have severe sanctions.</div></div>
<p>Fines, sanctions, license loss, contractual impacts, reputational damage, customer loss, civil suits, in some cases criminal liability.</p>

<h4>Compliance monitoring</h4>
<div class="kvs">
<span class="k">Due diligence</span><span class="v">Reasonable prior investigation.</span>
<span class="k">Due care</span><span class="v">Exercise reasonable care continuously (patching, monitoring).</span>
<span class="k">Attestation & acknowledgment</span><span class="v">Formal declaration (internal or external) that confirms compliance.</span>
<span class="k">Internal & external monitoring</span><span class="v">Own and third-party audits.</span>
<span class="k">Automation</span><span class="v">GRC (Governance, Risk, Compliance) tools.</span>
</div>

<h4>Privacy</h4>
<div class="kvs">
<span class="k">Legal implications</span><span class="v">Local, regional, national, global.</span>
<span class="k">Data subject</span><span class="v">The individual whose data is processed.</span>
<span class="k">Controller vs Processor</span><span class="v">Decides vs processes.</span>
<span class="k">Ownership</span><span class="v">Who owns the data.</span>
<span class="k">Data inventory & retention</span><span class="v">Catalog of data and how long to keep.</span>
<span class="k">Right to be forgotten</span><span class="v">Deletion on request (GDPR).</span>
<span class="k">Privacy by design</span><span class="v">Privacy built in from design.</span>
</div>
<p><b>Key regulations to know:</b> <b>GDPR</b> (EU), <b>CCPA/CPRA</b> (California), <b>HIPAA</b> (US health), <b>PIPEDA</b> (Canada), <b>LGPD</b> (Brazil).</p>

<h3>5.5 Audit and assessment</h3>

<h4>Internal audit</h4>
<div class="kvs">
<span class="k">Audit committee</span><span class="v">Committee that oversees internal audits.</span>
<span class="k">Self-assessment</span><span class="v">Self-evaluation.</span>
</div>

<h4>External audit</h4>
<p>Regulatory examinations, assessment, attestation, independent third-party audits (SOC 2, ISO 27001).</p>

<h4>Penetration testing — modes</h4>
<div class="callout analogy"><span class="ico">◐</span><div><b>Analogy:</b> hiring an ex-burglar to test your house security. <b>Red team</b> = ex-burglar. <b>Blue team</b> = your guards. <b>Purple team</b> = both training together.</div></div>
<div class="minicards">
<div class="minicard"><div class="h">Physical</div><p>Attempt physical entry to the building.</p></div>
<div class="minicard"><div class="h">Offensive (red team)</div><p>Attacks stealthily and targeted.</p></div>
<div class="minicard"><div class="h">Defensive (blue team)</div><p>Defends and detects.</p></div>
<div class="minicard"><div class="h">Integrated (purple team)</div><p>Red + blue collaborating in real time.</p></div>
</div>

<h4>Environment knowledge</h4>
<div class="kvs">
<span class="k">Known environment</span><span class="v">Formerly "white box". Full access to info, code, diagrams.</span>
<span class="k">Partially known</span><span class="v">Formerly "gray box". Partial information.</span>
<span class="k">Unknown environment</span><span class="v">Formerly "black box". No info; simulates external attacker.</span>
</div>

<h4>Reconnaissance</h4>
<div class="compare">
<div><h5>Passive</h5><p>Without touching the target. <b>OSINT</b>: social media, Shodan, DNS records, GitHub. <b>Analogy:</b> watching from a distance with binoculars.</p></div>
<div><h5>Active</h5><p>Interacts: port scanning, banner grabbing, fingerprinting. <b>Analogy:</b> knocking on doors.</p></div>
</div>

<div class="term"><div class="t">Rules of engagement (RoE)</div>Document defining scope, time window, emergency contacts and what's <b>out of scope</b>. <b>No pentest happens without RoE.</b></div>

<h3>5.6 Awareness and training</h3>

<h4>Phishing</h4>
<div class="callout info"><span class="ico">ⓘ</span><div>Internal <b>phishing campaigns</b> are drills, <b>not punishment</b>. They measure click rate and report rate to drive specific training.</div></div>
<ul>
<li>Recognize attempts: exaggerated urgency, spelling mistakes, weird domains, unusual requests.</li>
<li>Procedure to report: "Report Phishing" button in the email client.</li>
</ul>

<h4>Anomalous behavior</h4>
<div class="minicards">
<div class="minicard"><div class="h">Risky</div><p>Bypassing controls on purpose.</p></div>
<div class="minicard"><div class="h">Unexpected</div><p>Outside the user's usual pattern.</p></div>
<div class="minicard"><div class="h">Unintentional</div><p>Honest human error.</p></div>
</div>

<h4>User guidance & training (topics to cover)</h4>
<div class="kvs">
<span class="k">Policy / handbooks</span><span class="v">Employee handbook.</span>
<span class="k">Situational awareness</span><span class="v">Stay alert to context.</span>
<span class="k">Insider threat</span><span class="v">Recognize signs in colleagues and yourself.</span>
<span class="k">Password management</span><span class="v">Use of password managers, MFA.</span>
<span class="k">Removable media & cables</span><span class="v">Don't insert found USBs; beware of malicious cables.</span>
<span class="k">Social engineering</span><span class="v">Recognize manipulation attempts.</span>
<span class="k">OPSEC</span><span class="v"><b>Operational Security</b>: limit info exposure that an adversary could aggregate (social media, public conversations).</span>
<span class="k">Hybrid / remote work</span><span class="v">Secure Wi-Fi, VPN, private physical space.</span>
</div>

<h4>Reporting and monitoring</h4>
<div class="kvs">
<span class="k">Initial</span><span class="v">At employee onboarding.</span>
<span class="k">Recurring</span><span class="v">At least annual, refreshers.</span>
<span class="k">Metrics</span><span class="v">Click rate, report rate, completion rate, improvement over time.</span>
</div>

<h4>Development and execution</h4>
<p>Structured program, role-adapted content (a developer doesn't need the same as a receptionist), gamification for engagement, metrics for iteration.</p>
`}
];
