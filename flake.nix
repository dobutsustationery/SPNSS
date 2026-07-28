{
  description = "SPNSS EOOD Corporate Website Development Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            gh
            git
            nodejs_22
          ];

          shellHook = ''
            echo "SPNSS EOOD development environment loaded."
            echo "gh version: $(gh --version | head -n 1)"
          '';
        };
      }
    );
}
