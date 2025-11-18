import { Section } from './types';

const PROMPT_POSTFIX = `
Format the response clearly for a technical audience. Your main focus should be the code. The text should serve to explain the code. Use Markdown-style formatting:
- Use '##' for main headings.
- Use '*' for bullet points.
- The Python code example should be the centerpiece of your explanation. Wrap it in triple backticks.
\`\`\`python
# Your complete and runnable Qiskit code here
\`\`\`
Ensure the explanation is comprehensive, accurate, and tied directly to the provided code. Conclude each section with a brief heading "## Real-World Implications & Future" that discusses how this specific concept is vital for building future quantum computers or applications (e.g., fault-tolerant computing, quantum chemistry, etc.).
`;

const GLOSSARY_PROMPT_POSTFIX = `
Please provide clear and concise definitions. For each term, format the output with the term as a main heading using '##'. For example:
## Qubit
A qubit, or quantum bit, is the basic unit of quantum information...
`;

export const SECTIONS: Section[] = [
  {
    id: 'overview',
    title: 'I: Overview of Quantum Computing',
    prompt: `Generate a simple Qiskit Python code example that creates a quantum circuit with one qubit. The code must: 1. Initialize the qubit in the |0⟩ state. 2. Apply a Hadamard gate to put it in superposition. 3. Measure the qubit 1024 times. 4. Plot a histogram of the results. Following the code, provide a clear, line-by-line explanation of what each part does. Use this explanation to introduce the fundamental concepts of a qubit, superposition, and measurement in quantum computing, showing how the roughly 50/50 histogram result demonstrates these principles.${PROMPT_POSTFIX}`,
  },
  {
    id: 'gates',
    title: 'II: Understanding Quantum Gates',
    prompt: `Provide distinct Qiskit Python code examples for the most fundamental quantum gates: Hadamard, Pauli-X, Pauli-Z, and CNOT. For each gate: 1. Show the code to create a simple circuit and apply the gate. 2. Use the 'StatevectorSimulator' to print the quantum state vector *before* and *after* the gate is applied. 3. Provide a concise explanation of the code and the resulting state change, linking it to the gate's function (e.g., 'The X gate flips the qubit from |0⟩ to |1⟩, as seen by the state vector changing from [1, 0] to [0, 1]').${PROMPT_POSTFIX}`,
  },
  {
    id: 'deutsch',
    title: 'III: Deutsch Algorithm',
    prompt: `The centerpiece of this section is the Qiskit Python code for the Deutsch Algorithm. Provide a complete, well-commented implementation that solves the problem for both a 'constant' and a 'balanced' oracle. Your explanation should primarily be a walkthrough of the code itself. Explain the purpose of each block of code: setting up the qubits, applying the initial Hadamards, constructing the oracle, applying the final Hadamard, and interpreting the measurement result to determine if the function is constant or balanced.${PROMPT_POSTFIX}`,
  },
  {
    id: 'superconducting',
    title: 'IV: Superconducting Qubit Hardware',
    prompt: `While the hardware is complex, explain its principles through code. Provide a conceptual Python class named \`SimulatedSuperconductingQubit\`. This class should simulate key properties: \`state\` (as a complex vector), \`t1_time\` (relaxation), and \`t2_time\` (decoherence). Include methods like \`apply_gate(gate_matrix)\` and a method \`simulate_decoherence(time_elapsed)\` that introduces a small random error to the state vector based on T1/T2 times. Explain how this code model represents the real-world challenges of building superconducting qubits, like their sensitivity to noise and finite coherence times.${PROMPT_POSTFIX}`,
  },
  {
    id: 'silicon',
    title: 'V: Silicon Spin Qubit Hardware',
    prompt: `Explain silicon spin qubits using a code-centric approach. Provide a conceptual Python class \`SimulatedSpinQubit\`. The class should have attributes representing the electron's \`spin_state\` ([alpha, beta]) and a \`control_voltage\`. Implement a method \`apply_microwave_pulse(duration, frequency)\` that modifies the \`spin_state\` by applying a rotation matrix (like R_x or R_y). Explain how this code simulates the physical mechanism of using microwave pulses to control the quantum state of an electron spin, highlighting how manufacturing variations could be modeled by adding noise to the pulse parameters.${PROMPT_POSTFIX}`,
  },
  {
    id: 'photonic_ion',
    title: 'VI: Photonic & Trapped Ion Qubits',
    prompt: `Explain Trapped Ion and Photonic qubits through two distinct conceptual Python classes. 1. \`SimulatedTrappedIon\`: Should include properties like \`electronic_state\` and methods like \`apply_laser_pulse(pulse_shape)\` that change the state. Emphasize its long simulated coherence time in your explanation. 2. \`SimulatedPhotonicQubit\`: Should represent the qubit via its \`polarization_state\` (e.g., a Jones vector). Include a method \`pass_through_waveplate(plate_matrix)\` that transforms the polarization. Explain how this models photonic computation and why creating two-qubit interactions (gates) is a primary challenge, which would require a more complex simulation.${PROMPT_POSTFIX}`,
  },
  {
    id: 'teleportation',
    title: 'VII: App: Quantum Teleportation',
    prompt: `Provide a complete Python project code example using Qiskit to demonstrate a core quantum protocol: Quantum Teleportation. The code should be well-commented and include creating the entangled Bell pair, applying gates based on the source qubit's state, performing measurements, sending the classical results, and performing the final operations to recover the state on the target qubit. Conclude by running the simulation and showing that the final state vector of the target qubit matches the initial state vector of the source qubit. Use this practical example to discuss the progress needed to make such protocols robust on real hardware.${PROMPT_POSTFIX}`,
  },
  {
    id: 'qaoa',
    title: 'VIII: App: QAOA for Optimization',
    prompt: `Focus on a real-world quantum algorithm: the Quantum Approximate Optimization Algorithm (QAOA). The centerpiece must be a complete Qiskit implementation solving the Max-Cut problem for a simple graph (e.g., a 4-node square graph). Your response must include: 1. A clear, well-commented Python code block for the entire process: defining the graph, building the cost and mixer operators, creating the QAOA ansatz, choosing a classical optimizer, and running the algorithm to find the optimal parameters and solution. 2. A concise explanation of what the Max-Cut problem is. 3. A breakdown of the code, explaining how the quantum circuit is constructed to explore the solution space and how the classical optimizer helps find the best answer. This demonstrates a hybrid quantum-classical approach.${PROMPT_POSTFIX}`,
  },
  {
    id: 'drug_discovery',
    title: 'IX: Real-World App: Drug Discovery',
    prompt: `Showcase a foundational real-world application of quantum computing: simulating molecular energies for drug discovery. The centerpiece must be a Qiskit code example that simulates the ground state energy of a simple molecule like Lithium Hydride (LiH). The code must: 1. Use Qiskit Nature to define the molecular structure. 2. Create a fermionic operator representing the molecule's Hamiltonian. 3. Map this to a qubit operator. 4. Use the NumPyMinimumEigensolver to classically find the molecule's ground state energy from the qubit Hamiltonian. Explain each step, focusing on how this process sets the stage for using a real quantum algorithm (like VQE) to solve the same problem for molecules that are too complex for classical computers. This is a critical task in pharmaceutical research.${PROMPT_POSTFIX}`,
  },
  {
    id: 'glossary',
    title: 'X: Glossary of Terms',
    prompt: `Generate a glossary of essential quantum computing terms. The response should only contain the glossary. Include definitions for at least the following: Qubit, Superposition, Entanglement, Quantum Gate, Measurement, Coherence (T1/T2), Decoherence, Quantum Circuit, Hamiltonian, and Variational Quantum Eigensolver (VQE).${GLOSSARY_PROMPT_POSTFIX}`,
  }
];