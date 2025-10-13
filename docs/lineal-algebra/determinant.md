---
sidebar_position: 2
title: Determinant
sidebar_label: Determinant
---

## 💡 What is the Determinant?

For a square matrix $A \in \mathbb{R}^{n \times n}$, the **determinant** $\det(A)$ is a scalar value that represents:

- Whether the matrix is **invertible**:
  - $\det(A) \neq 0$ → invertible  
  - $\det(A) = 0$ → not invertible
- The **scaling factor** of area (2D) or volume (3D) produced by the linear transformation defined by $A$.
- The **orientation** of space (sign of $\det(A)$):
  - Positive → preserves orientation  
  - Negative → reverses orientation

$$
\text{If } \det(A) = 0, \text{ the transformation collapses space into a lower dimension.}
$$

---

## 🧠 Example in Python (using NumPy)

```python
import numpy as np

# Define a 2x2 matrix
A = np.array([[2, 3],
              [1, 4]])

# Compute the determinant
det_A = np.linalg.det(A)

print(det_A)  # Output: 5.0
````

$$
\det(A) = 2 \cdot 4 - 3 \cdot 1 = 5
$$

---

## ✳️ Summary

| Concept           | Meaning               |
| ----------------- | --------------------- |
| $\det(A) \neq 0$  | Matrix is invertible  |
| $\det(A) = 0$     | Matrix is singular    |
| $\det(A)$         | Scale factor of area/volume |
| Sign of $\det(A)$ | Indicates orientation |

