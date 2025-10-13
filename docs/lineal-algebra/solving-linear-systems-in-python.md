---
sidebar_position: 1
title: Solving Linear Systems
sidebar_label: Solving Linear Systems
---

## 🧮 Solving Linear Systems with the Gauss–Jordan Method

A **linear system of equations** can be written in matrix form as:

$$
A \mathbf{x} = \mathbf{b}
$$

where

$$
A =
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}, \quad
\mathbf{x} =
\begin{bmatrix}
x_1 \\[4pt] x_2 \\[4pt] x_3
\end{bmatrix}, \quad
\mathbf{b} =
\begin{bmatrix}
b_1 \\[4pt] b_2 \\[4pt] b_3
\end{bmatrix}
$$

The **Gauss–Jordan method** transforms the matrix $A$ into the identity matrix by using **row operations**, producing the solution vector $\mathbf{x}$.

In practice, we can use numerical libraries (like NumPy) that implement efficient algorithms based on LU/Gaussian elimination.

---

### 🔹 Example in Python

```python
import numpy as np

# Coefficient matrix (3x3)
A = np.array([[2, 1, -1],
              [-3, -1, 2],
              [-2, 1, 2]], dtype=float)

# Constants vector (1D is common for np.linalg.solve)
b = np.array([8, -11, -3], dtype=float)

# Solve the system A * x = b
x = np.linalg.solve(A, b)

print("Solution:")
print(x)
````

**Output:**

```
[ 2.  3. -1.]
```

---
### 📘 Mathematical Explanation

We are solving the system:

$$
\begin{cases}
2x + y - z = 8 \\
-3x - y + 2z = -11 \\
-2x + y + 2z = -3
\end{cases}
$$

By applying **Gauss–Jordan elimination** we reduce the augmented matrix

$$
\left[
\begin{array}{ccc|c}
2 & 1 & -1 & 8 \\
-3 & -1 & 2 & -11 \\
-2 & 1 & 2 & -3
\end{array}
\right]
$$

to the identity matrix on the left:

$$
\left[
\begin{array}{ccc|c}
1 & 0 & 0 & 2 \\
0 & 1 & 0 & 3 \\
0 & 0 & 1 & -1
\end{array}
\right]
$$

Therefore, the solution is:

$$
x = 2, \quad y = 3, \quad z = -1
$$
