% GNU Octave / Matlab
% Define a range for x and y axes:
x = linspace(-3, 3, 100);
y = linspace(-3, 3, 100);

% Create a grid of x and y values
[X, Y] = meshgrid(x, y);

% Define the surface function z = f(x, y)
Z = -3 ./ (1 + X.^2 + Y.^2);

% Plot the surface
surf(X, Y, Z);

% Add labels and title
xlabel('X-axis');
ylabel('Y-axis');
zlabel('Z-axis');
title('3D Surface Plot Example');
